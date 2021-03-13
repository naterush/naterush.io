use std::collections::HashMap;
use std::fs;
use regex::Regex;
use chrono::{DateTime, NaiveDate, NaiveDateTime, NaiveTime};


fn get_post_filename(title: String, date: String) -> String {
    return title.replace(" ", "-").replace(":", "").replace(".", "").replace(",", "")
}

fn line_to_html(line: String, keep_links: bool, cut: bool) -> String {
    let mut replace: HashMap<String, String> = HashMap::new();
    replace.insert(
        ">".to_string(),
        "&gt;".to_string(),
    );
    replace.insert(
        "<".to_string(),
        "&lt;".to_string(),
    );
    replace.insert(
        "'".to_string(),
        "&apos;".to_string(),
    );
    replace.insert(
        "\"".to_string(),
        "&apos;".to_string(),
    );
    replace.insert(
        "{".to_string(),
        "(".to_string(),
    );
    replace.insert(
        "}".to_string(),
        ")".to_string(),
    );

    let mut new_line: String = line.to_string();


    for (old, new) in &replace {
        new_line = new_line.replace(old, new);
    }

    let re = Regex::new(r"\[([^\[]+)\]\(([^\s\\]*)\)").unwrap();

    for link in re.captures_iter(&new_line.clone()) {
        let word = link.get(1).unwrap().as_str();
        let link = link.get(2).unwrap().as_str();

        if keep_links {
            new_line = new_line.replace(&format!("[{}]({})", word, link), &format!("<a href='{}'>{}</a>", link, word))
        } else {
            new_line = new_line.replace(&format!("[{}]({})", word, link), &format!("{}", word))
        }
    }

    if cut {
        new_line = new_line.chars().take(100).collect();
        if new_line.len() > 90 {
            new_line = format!("{}...", new_line);
        }
    }

    if new_line != "" {
        if new_line.starts_with("##") {
            return format!("<h3>{}</h3>", new_line.strip_prefix("##").expect("dork")); 
        } else if new_line.starts_with("#") {
            return format!("<h2>{}</h2>", new_line.strip_prefix("#").expect("dork")); 
        } else {
            return format!("<div>{}</div>", new_line);
        }
    }

    return new_line;
}

fn post_to_divs(post: String) -> String {
    
    let mut divs: String = "".to_string();
    for line in post.lines() {
        divs.push_str(&format!("{}\n", &line_to_html(line.to_string(), true, false)));        
    }
    return divs;
}

fn get_teaser(post: String) -> String {
    
    for line in post.lines() {
        if line != "" && !line.starts_with("#") {
            return line_to_html(line.to_string(), false, true);        
        }
    }

    return "".to_string();
}


fn format_post(title: String, date: String, post: String, num: i64) -> String {
    return format!("import React from 'react';
import './Post.css'

export const TITLE{num} = \"{title}\";
export const DATE{num} = \"{date}\";
export const TEASER{num} = () => ({teaser});

    
function Post() {{
    return (
    <div className='post'>
        <h1>
            {title}
        </h1>
        {divs}
    </div>
    );
}}

export default Post;", num=num, title=title, divs=post_to_divs(post.clone()), date=date, teaser=get_teaser(post.clone()));
}

fn main() {
    let paths = fs::read_dir("../_posts").unwrap();

    let mut imports: String = "".to_string();
    let mut exports: String = "".to_string();
    let mut exports_vec: Vec<String> = Vec::new();
    let mut date_vec: Vec<NaiveDate> = Vec::new();

    let mut num = 0;

    for path in paths {
        let mut title : String = "".to_string();
        let mut date : String = "".to_string();
        let mut categories : String = "".to_string();
        let path_buf = path.unwrap().path();
        let file_contents = fs::read_to_string(path_buf)
            .expect("Something went wrong reading the file");
        let lines = file_contents.lines();
        for line in lines {
            if line.starts_with("title: ") {
                // Dont take the quote
                title = line.chars().skip(9).take(line.len() - 9 - 1).collect();
            }
            if line.starts_with("date: ") {
                // Dont take the quote
                date = line.chars().skip(8).take(line.len()).collect();
            }
            if line.starts_with("categories: ") {
                // Dont take the quote
                categories = line.chars().skip(11).take(line.len()).collect();
                break;
            }
        }
        let post: String = file_contents.chars().skip(file_contents.rfind("---").unwrap() + 4).take(file_contents.len()).collect();

        let filename = get_post_filename(title.clone(), date.clone());
        let formatted_post = format_post(title, date.clone(), post, num);
        fs::write(format!("../src/posts/{}.tsx", filename), formatted_post).expect("Unable to write file");    
        
        imports.push_str(&format!("import Post{num}, {{TITLE{num}, DATE{num}, TEASER{num}}} from \"./{filename}\";\n", num=num, filename=filename));
        let first_word = date
            .split_whitespace()
            .next()
            .unwrap_or("");
        let date_only = NaiveDate::parse_from_str(first_word, "%Y-%m-%d").unwrap();
        date_vec.push(date_only);
        date_vec.sort();
        date_vec.reverse();

        let index = date_vec.iter().position(|&r| r == date_only).unwrap();
        exports_vec.insert(index, format!("{{'key': \"{filename}\", 'post': Post{num}, 'title': TITLE{num}, 'date': DATE{num}, 'teaser': TEASER{num}}},\n", filename=filename, num=num));
    
        num = num + 1;

    }

    for export_line in exports_vec {
        exports.push_str(&export_line);
    }

    let index_contents = format!("import React from \'react\';

{imports}

const x: {{\'key\': string, \'post\': () => JSX.Element, \'title\': string, \'date\': string, \'teaser\': () => JSX.Element}}[] = [{exports}];

export default x;", imports=imports, exports=exports);

    fs::write("../src/posts/index.tsx", index_contents).expect("Unable to write file");    
}

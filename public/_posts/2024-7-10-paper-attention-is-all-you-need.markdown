---
layout: post
title:  "Paper Review: Attention is All You Need"
date:   2024-7-10 0:00:00 -0400
categories:
  - paper-review
---

Paper [here](https://arxiv.org/abs/1706.03762). Had a lot of useful dialogue with LLMs themselves to help understand a lot of this. 

# First Pass

## Abstract
- "sequence transduction" - I do not know what transduction means here
- Transformers vs. recurrence and convolutions
- Transforms do better and are more parallelizable

## Introduction
- Recurrent neural networks, long short-term memory [13] and gated recurrent [7] neural networks, were the state of the art in sequence modeling and "transduction" - what the heck. 
- Encoding I get. Position embeding I get.

## The actual model
- Ok, I Q, K, V. The Query vector is trying to figure out it's attention on other tokens. The Key vector is how the other things connect with the query vector. These two then scaled by the dimension of the vector and then softmaxed (why?). And then finially multiplied by the Value matrix.
- Ah. Softmax pretty much just normalizing things. Ok. Reasonable.
- And then there's a feedforward network and add and normalize. There also seems to be a pass around the feedforward network - why, and also what the heck is this?
- Feedforward network: literally just introduces some non-linearity. Just allows the model to learn some more interesting functions. Ok, cool. 
- They also have the skip connections (which is what I was calling a pass around) - this just makes training go better (and gradients not vanish). Lol at how hokey pokey this stuff is. 
- MultiHeadSelfAttention is just a bunch of just SelfAttention components that can pay attention to different things. They learn Q, K, V seperately - sure, that makes sense. Averaging would remove this - but multi-headed attention does not. 
- Ok! The encoder runs once, and encodes the input. And then there is an autoregressive loop that the decoder runs through. It takes the encoder output, and then starts with a blank token, and then generates the next output. And then shifts that one right, and does this again. 
- Autoregressive means that each value is a function of the past values. In practice the decoder runs in a loop. While this makes sense to me in some sense, (variable sampling length) - why does the attention Q/K/V matrixes not need this variable size? Ah. Positional embedings help here. Pretty much 
- Omg. Missed a Nx on the side of each of the model sides. So they might go through a bunch of attention layers, and there might be lots of subloops.
- Ok, a little confused on the implementation details on the masking in the output network... but it all makes sense pretty much. 
- Scaled dot product attention is pretty easy to make sense of with a geometric understanding... how much are these fellas looking projected onto eachother. They also note it's cheap to calculate.

## Training

- 10 GPUs. Ok.
- 3.5 days. Cool.
- Hyperparameters seem pretty random.
- Quality drops off with one head or too many heads. Question below about what the best saturation is?

## Attention Visualizations
- These are incredible helpful and informative for giving an intuative understanding; although I'm sure that this is not always as helpful - some attention is probably dumb?


# My Broken Understanding

Here’s how this all works:

### Encoding

- If you have a sentence like: “The cat and the hat”
-  First, every word gets turned into a vector, so you get [v_the, v_cat, v_and, v_the, v_hat]
-  Then, every word gets positionally encoded - so like tagged with a “first in the sentence, second in the sentence, …”
- Then, “self-attention” is applied. This effectively is where every vector (aka every word) gets to look at all the other words in the sequence and see how “relevant” they are to it.

This is the fundamental break through. So for example, the first word “the” - there might be a part of the network that learns to pay attention to the “article / following noun” rule. And so when it goes through that part of the network, v_the would pay a lot of attention to v_cat.

- This gets put through some non-linearity as well as some normalization. This is pretty simple to understand - just make everything nice and plesant. 
- Loop this a bunch of times. So keep paying attention, and then normalizing, etc. 

The steps above are the “encoder”. They turn the original input into like a “representation” of the original sentence, where you can think about as having a) the meaning of the words, but also b) the position of the words, and c) the “attention” that each of these words pay to eachother. The “attention” is best understood as some learned semantic properly… like the “article / following noun” rule! But it might also be other things that we don't understand but the computer has learned is effective for them!

### Decoding

Ok, so we have a good representation of the input sentence. But we want to generate an output. How do we do that? 

- First, start with an empty output sequence. 
- Then, do some attention on the output sequence alone. 
- Then, do attention on it, along with attention on the input encoding (this I do not understand very well...)
- Normalize and loop this a bunch of times as well
- Somehow, you get the distribtion over the output tokens out of this. Thinking about the type here, it must be a probability distribuion over the tokens in your grammar... so it's like a vector of size of your grammar?

# Questions:
1. What does it meant to have the input encoding as well as the output encoding being fed into the same attention network really mean?
2. What is the type of the output of the decoder? Feels like it's a vector the size of your # of tokens - but how do we actually get from that to your 
3. What is all this obsession with the masking output tokens so they don't incorrectly get access to data they shouldn't? I don't really get where this enters in, or why such a big deal is made out of it. 
4. How the hell is it possible that learned positional embeddings are actually not better than that insane sin function stuff? I don't get it. 
5. What is the optimal amount of data to "saturate" a given architecture. Like, one head is not the best, but you can also have too many heads. So what's the best? 
6. How does the tensor2tensor approach actually relate to the chat bots? Like, I can easily imagine how you get this to generate the next work. But then are there Input and Output encodings in this case? Presumably yes, but I need do some thinking about this. 


# Some Ideas
1. "neighborhood of size r in the input sequence centered around the respective output position." -> you could also imagine allowing the model to learn the size of `r`, potentially. This is a little weird to imagine. Do you need to add something to the loss function about execution speed? 
2. More generally, I'm really interested in evolving model architectures. Where the loss function takes into account the runtime of the model, or something like that? Idk, random idea. 

# References to Read:
- Previous state of the art:
  - Long short-term memory
  - Generating sequences with recurrent neural networks.
  - Learning phrase representations using rnn encoder-decoder for statistical machine translation.
- Adam: A method for stochastic optimization.
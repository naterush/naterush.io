---
layout: post
title:  "Baby's First CUDA"
date:   2024-11-13 0:00:00 -0400
categories:
  - ai-safety
---

The guide is [here](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html).

# CUDA

## Raw Notes
- I wonder how much the word "kernel" being overloaded has confused me before. I expect a bit. Like [these kernels](https://github.com/openai/sparse_autoencoder/blob/main/sparse_autoencoder/kernels.py) I was a bit confused about before. 
- Threads and thread ids. Seems legit. 
- I'm going to just go implement. This is the best.

## Implementing some simple algos in C
- Vector add very easy
- Matrix add also very easy, just getting back up to speed with C code and mallocing arrays. 
- Matrix multiply also easy. The number of threads is a function of the size of the output array.

## Errors
- "CUDA error: invalid configuration argument" - this likely means you used more threads than you should have.
- If we out of bounds access in the CUDA kernel, we don't get an error, we just get all zeros in the resulting array. I guess undefined behavior is wacky -- that's not fun at all. 

# Triton

## Raw Notes
- In the OpenAI SAE example they use, they are writing Triton code. Let's go look at that.
- Let's go [read a little bit](https://openai.com/index/triton/) about Triton and then write a Triton program.  
- Fused kernels just means that you do multiple operations in the same kernel. This is more efficient for obvious reasons: namely, you have the memory loaded, you might as well do the things there. 
- I really love I don't need to write in C, but at the same time we're still working with raw memory - so I wonder much better things really are. 
- Note that you are responsible for doing the backwards pass manually. So we're a bit back to basics in that sense - but that seems reasonable. 

## Some Simple Algorithms
- Vector addition. Very simple. Works with blocks, and masks. 
- Softmax. Ok a fair bit more complicated, but mostly fundamentally sensical. _Overall, I feel the benefits of Triton aren't so apparently to me until I've really spent a fair bit of time writing CUDA programs by hand. This makes sense.__
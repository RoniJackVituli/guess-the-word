# Hi! 👋🏻 My name is RoniJack Vituli
## Full Stack

Here's what I've been working with lately. It's dead-simple. No clever solution here. But it satisfies two of my main concerns: I want to always have a way to retrieve the absolute latest state value. I'd really like to have the new state value returned to me after state updates. This may not seem like that big-of-a-deal - but sometimes, I really wish that the built-in set() functions would simply return the new value to me. (Of course, they can't simply return the new value, because they're asynchronous. So all they could return would be a promise.) To address these two issues, I created this (super crazy simple) Hook:

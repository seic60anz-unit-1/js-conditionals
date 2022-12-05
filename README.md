# Comparison Operators, Logical Operators, & Conditionals

### Getting Started

1. Fork this repo and `git clone` it down to your computer.
1. Create two files `index.html` and `script.js`.
1. Include `script.js` in `index.html` using a `<script>` tag.
1. Open `index.html` in your web browser and open the console.
1. After answering each section below, `git commit` your work.
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request.

---

### Booleans & Comparison Operators

You don't need to do this section in your `script.js` file. Just write your answers directly in the markdown tables below.

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

| a     | !a    |
|-------|-------|
| true  | false |
| false | true  |

Fill out the truth tables below for `&&` (AND), `||` (OR) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
>
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a     | b     | a AND b |
|-------|-------|---------|
| true  | true  | ?       |
| true  | false | ?       |
| false | true  | ?       |
| false | false | ?       |

| a     | b     | a OR b |
|-------|-------|--------|
| true  | true  | ?      |
| true  | false | ?      |
| false | true  | ?      |
| false | false | ?      |

| a | b   | a `!=` b |
|---|-----|----------|
| 3 | 3   | ?        |
| 1 | 5   | ?        |
| 2 | "2" | ?        |

| a     | b     | !a AND (a OR b) |
|-------|-------|-----------------|
| true  | true  | ?               |
| true  | false | ?               |
| false | true  | ?               |
| false | false | ?               |

---

### Exam Marks

Create a variable called `studentScore` and assign it a number between 0 and 100. Write a conditional that matches the following conditions:

- If a student scores 80 or more, tell them they've got an A.
- If they score 70 or more, tell them they've got a B.
- If they score 60 or more, tell them they've got a C.
- If they score 50 or more, tell them they've got a D.
- If they score below 50, tell them they have to re-take the exam.

### Pizza/Pasta

1. Use the [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function to record what a user would like to eat in a variable
1. Check if they like pizza, and if they do then output `"yay pizza!!"`
1. Otherwise check if they like pasta, and if they do then output `"ooh I love pasta!!"`
1. If they don't like either one, then output `"brussel sprouts for you!"`

---

### Bouncer 1

You're a bouncer at a bar. Create an `age` variable and a conditional that satisfies the following requirements...
- If a patron is older than `21`, output `"Come on in!"`.
- If a patron is between `18` and `21`, output `"Come on in (but no drinking)!"`.
- If a patron is younger than 18, output `"You're too young to be in here!"`.
- If a patron is older than 75, output `"Are you sure you want to be here?"`.

---

### Bouncer 2

Bar patrons must have an ID if the bouncer is even going to consider what age they are.
- If the patron has an ID, the bouncer will then check if they are of the proper age
- If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

> Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?

---

### Valentine's Day Flowchart

- Implement the flowchart below in code.

![](https://venngage-wordpress.s3.amazonaws.com/uploads/2018/02/flow-chart-template-1.png)

---

### Letter to Santa Flowchart

- Implement the flowchart below in code.
- For each node in the flowchart that isn't a question, output the text to the console.
  i.e.
  ```js
  console.log('Write your wishlist and letter to Santa.')
  console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
  ```

![Flowchart](https://i.imgur.com/CfhdkQg.jpg)

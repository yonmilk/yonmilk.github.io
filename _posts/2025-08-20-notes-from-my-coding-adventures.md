---
layout: post
title: "Notes from my coding adventures"
date: 2025-08-20
category: Learning
excerpt: "Lessons learned, bugs squashed, and aha moments from recent coding sessions."
---

# Notes from My Coding Adventures

Every coding session teaches something new. Here are some notes and lessons from recent development work.

## Today's Bug Hunt

### The Case of the Mysterious CSS Overflow

**Problem**: Content was mysteriously cutting off on mobile devices.

**Investigation**: 
- Checked responsive breakpoints ✓
- Verified container widths ✓  
- Examined z-index issues ✓
- Found it! A `white-space: nowrap` causing horizontal overflow

**Lesson**: Sometimes the simplest properties cause the most confusing bugs.

### JavaScript Scope Gotcha

**Problem**: Variables weren't updating as expected in a loop.

**Discovery**: Classic closure issue in a `setTimeout` callback.

```javascript
// Problem
for (let i = 0; i < items.length; i++) {
  setTimeout(() => console.log(i), 1000); // Always logs items.length
}

// Solution  
for (let i = 0; i < items.length; i++) {
  setTimeout((index) => console.log(index), 1000, i);
}
```

**Lesson**: `let` vs `var` matters, but closures can still trip you up.

## New Things Learned

### Git Aliases Save Time

Set up some useful Git shortcuts:

```bash
git config --global alias.co checkout
git config --global alias.br branch  
git config --global alias.ci commit
git config --global alias.st status
```

Small efficiency gains add up over time.

### CSS Grid is Amazing

Finally dove deeper into CSS Grid. The ability to create complex layouts with clean, semantic HTML is incredible.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}
```

Much cleaner than the float and flexbox workarounds I used to rely on.

## Problem-Solving Patterns

### The Rubber Duck Method Works

Explaining problems out loud (even to a rubber duck) really does help. Speaking forces you to organize thoughts clearly.

### Break It Down

When stuck on a complex problem:
1. Identify the smallest possible step
2. Get that working first  
3. Build up incrementally
4. Test frequently

### Read the Error Messages

Sounds obvious, but I catch myself jumping to solutions before carefully reading what the error actually says.

## Tools and Techniques

### Browser DevTools Gems

- `console.table()` for displaying arrays/objects
- `$0` to reference the currently selected element
- Network tab throttling to test slow connections
- Lighthouse for performance audits

### Keyboard Shortcuts That Changed My Life

- `Cmd/Ctrl + D` - Select next occurrence (VS Code)
- `Cmd/Ctrl + Shift + P` - Command palette
- `Alt + Click` - Multiple cursors
- `Cmd/Ctrl + /` - Toggle line comment

## Reflection

The more I code, the more I realize how much there is to learn. But that's what makes it exciting – there's always another problem to solve, another technique to master, another "aha!" moment waiting.

The key is embracing the learning process and celebrating small victories along the way.

## Tomorrow's Goals

- Refactor that messy component I wrote last week
- Learn about CSS custom properties
- Practice more Git branching strategies
- Write better commit messages

The adventure continues!
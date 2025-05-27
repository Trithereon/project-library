# project-library
From TheOdinProject Javascript Course
<section data-title="introduction">
  <h3 id="introduction"><a href="#introduction" class="anchor-link">Introduction</a></h3>

  <p>Let’s extend the ‘Book’ example from the previous lesson and turn it into a small Library app.</p>

</section>

<section data-title="assignment">
  <h3 id="assignment"><a href="#assignment" class="anchor-link">Assignment</a></h3>

  <div class="lesson-content__panel">

    <ol>
      <li>If you haven’t already, set up a Git repository for your project with skeleton HTML/CSS and JS files. From here on out, we’ll assume that you have already done this.</li>
      <li>
        <p>All of your book objects are going to be stored in an array, so you’ll need a constructor for books. Then, add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array. Also, all of your book objects should have a unique <code>id</code>, which can be generated using <code>crypto.randomUUID()</code>. This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged. Your code should look something like this (we’re showing only a basic skeleton without function parameters):</p>

        <div class="code-toolbar"><pre class="language-javascript line-numbers" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> myLibrary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// the constructor...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">addBookToLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// take params, create a book then store it in the array</span>
<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><div class="toolbar"><div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div></div></div>
      </li>
      <li>Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
        <ol>
          <li>While it might look easier to manipulate the display of the books directly rather than store their data in an array first, from here forward, you should think of these responsibilities separately. We’ll delve deeper into this concept later, but when developing applications, we want the flexibility to recreate elements (like our library and its books) in various ways using the same underlying data. Therefore, consider the logic for displaying books to the user and the book structures that hold all information as distinct entities. This separation will enhance the maintainability and scalability of your code.</li>
        </ol>
      </li>
      <li>Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" target="_blank" rel="noopener noreferrer">dialogs and modals</a> using the <code>&lt;dialog&gt;</code> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the <code>submit</code> input tries to send the data to a server by default. This is where <code>event.preventDefault();</code> will come in handy. Check out the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" target="_blank" rel="noopener noreferrer">documentation for event.preventDefault</a> and see how you can solve this issue!</li>
      <li>Add a button on each book’s display to remove the book from the library.
        <ol>
          <li>You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes" target="_blank" rel="noopener noreferrer">data-attribute</a> that corresponds to the unique <code>id</code> of the respective book object.</li>
        </ol>
      </li>
      <li>Add a button on each book’s display to change its <code>read</code> status.
        <ol>
          <li>To facilitate this you will want to create <code>Book</code> prototype function that toggles a book instance’s <code>read</code> status.</li>
        </ol>
      </li>
    </ol>

    <div class="lesson-note">

      <p>You’re not required to add any type of storage to save the information between page reloads.</p>

    </div>

  </div>
</section>

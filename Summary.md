# A summary of what I have learned

Building AI-Powered Apps with React and Express

### AI Foundations and Practical Model Operations

This was the most impactful part of the course, as it gave me a strong foundation in how AI models actually work and how to use them effectively in real applications.

- **Large Language Models (LLMs):**  
  I learned that LLMs are trained on massive text datasets and can perform diverse tasks such as summarization, classification, translation, content generation, and conversational interfaces. They are not “magic boxes” their behavior is shaped by the prompts I provide, the parameters I set, and the context I maintain. Understanding this helped me move from experimenting with outputs to deliberately engineering them.

- **Tokens and Context Windows:**  
  Tokens are the building blocks of text that models process. Every word or symbol is broken down into tokens, and each model has a maximum context window (e.g., 4k, 16k, or 32k tokens). This means I must design prompts carefully and manage conversation history to avoid exceeding limits. I also learned how to count tokens and estimate costs, which is critical for production apps where efficiency matters.

- **Choosing the Right Model:**  
  Different models balance speed, cost, and accuracy. Smaller models are faster and cheaper but less capable, while larger models handle complex reasoning but are slower and more expensive. I learned to match the model to the use case for example, using a lightweight model for classification tasks and a larger one for summarization or creative generation.

- **Model Settings and Parameters:**  
  Parameters like `temperature`, `top-p`, `max tokens`, and `frequency penalties` directly affect outputs. For instance:
  - Higher temperature increases creativity but reduces determinism.
  - Lower temperature makes responses more predictable and factual.
  - Max tokens control the length of responses.  
  I now treat these settings as tuning knobs to align outputs with user needs rather than leaving them at defaults.

- **Calling Models and Handling Outputs:**  
  I practiced making API calls to models and handling responses in different formats: plaintext, arrays, JSON objects, numbers, and even images. I learned to validate outputs, retry failed calls, and handle errors gracefully. This reinforced the idea that model calls are just another form of I/O that must be managed carefully.

- **Prompt Engineering:**  
  The course emphasized writing clear, structured prompts. I learned to:
  - Define roles (system, user, assistant messages).
  - Specify output formats (e.g., JSON schema).
  - Provide examples to guide the model.
  - Iteratively refine prompts based on failures.  
  This made me realize that prompt engineering is as much about clarity and constraints as it is about creativity.

- **Use Cases Implemented:**  
  I applied these foundations to build features like summarization, content generation, text classification, translation, data extraction, and chat interfaces. Each use case taught me how to adapt prompts and model settings to achieve reliable results.

- **Output Handling:**  
  I learned to expect different output types and design the backend to parse and validate them. For example:
  - JSON outputs require schema validation.
  - Plaintext can be displayed directly.
  - Arrays and numbers need type checking.  
  This reinforced the importance of treating AI responses as structured data, not just text.

---

## Full-Stack Setup and Tooling

- Bun, Express.js, React, Tailwind, and shadcn/ui formed the modern stack.  
- Prettier and Husky ensured code quality and consistency.  
- Environment variables kept API keys secure.  

---

## Clean Layers Architecture

- **Controllers:** Thin layers that handle HTTP requests and responses.  
- **Services:** Contain business logic and orchestrate model calls.  
- **Repositories:** Manage persistence and conversation state.  
- **Routes:** Map endpoints clearly and consistently.  

---

## Key Takeaways

- **Design contracts first, then code.**  
- **Token-aware UX prevents context overflow.**  
- **Observability (logging prompts and responses) is essential.**  
- **Clean architecture makes refactoring easier.**

---

This reflection captures how the course deepened my understanding of **AI foundations** and gave me practical skills to build maintainable, scalable AI-powered applications.
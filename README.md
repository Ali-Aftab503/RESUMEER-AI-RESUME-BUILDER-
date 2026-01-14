# Resumeer - AI-Powered Resume Builder

Resumeer is a modern, feature-rich resume builder built with Next.js 16 and AI capabilities. It empowers users to create professional, ATS-friendly resumes in minutes using artificial intelligence to generate compelling summaries, experience descriptions, and skills.

## Live Demo

Check out the live application here: [Live Demo Link](https://resumeer-ai-resume-builder.vercel.app/)
## 🚀 Key Features

- **🤖 AI-Powered Content Generation**
  - Instant generation of professional summaries tailored to your profile.
  - Smart suggestions for work experience descriptions.
  - Tone selection (Professional, Creative, Concise, etc.) to match your industry.

- **🎨 Professional Templates**
  - **Modern**: Clean, balanced design for tech and creative roles.
  - **Minimal**: Simple, text-focused layout perfect for academic and conservative fields.
  - **Classic**: Traditional layout that never goes out of style.

- **📝 Advanced Editor**
  - **Real-time Preview**: See changes instantly as you type.
  - **Drag-and-Drop**: Easily reorder sections, experience items, and skills.
  - **Rich Text Editing**: Fine-tune your content with precision.
  - **Live Validation**: Character counts and writing tips to ensure optimal length and impact.

- **💾 Smart Persistence**
  - **Local Storage**: Your data is saved automatically to your browser's local storage.
  - **Privacy First**: Your personal data stays on your device (except when sending context to AI for generation).
  - **JSON Import/Export**: Backup your resume data or move it between devices easily.

- **📄 High-Quality Export**
  - **PDF Export**: Generate perfectly formatted PDFs using `@react-pdf/renderer`.
  - **ATS Friendly**: Text is selectable and readable by Applicant Tracking Systems.

## 🛠️ Tech Stack

This project is built with the latest web technologies to ensure performance, scalability, and developer experience.

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) (Primitives)
  - [Lucide React](https://lucide.dev/) (Icons)
  - [Framer Motion](https://www.framer.com/motion/) (Animations)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand) (with Persistence)
- **AI Integration**:
  - `ai` SDK (Vercel AI SDK)
  - `@google/generative-ai` (Google Gemini) / Anthropic Claude
- **PDF Generation**: `@react-pdf/renderer`
- **Drag & Drop**: `@dnd-kit`

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add your AI API keys:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key_here
   # OR other supported providers
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Project Structure

```
resume-builder/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/              # Backend API routes (e.g., /generate)
│   └── page.tsx          # Main entry point
├── components/           # React Components
│   ├── editor/           # Form components (SummaryForm, ExperienceForm)
│   ├── preview/          # Resume preview components
│   ├── templates/        # Resume design templates
│   └── ui/               # Reusable UI components (buttons, inputs)
├── lib/                  # Utilities and helper functions
├── store/                # Zustand state management (resumeStore.ts)
└── public/               # Static assets
```

## ⚡ Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Add your Environment Variables (API Keys) in the Vercel project settings.
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

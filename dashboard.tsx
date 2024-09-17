import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, Code, Github, Rocket, BarChart, Share2, Zap, Link as LinkIcon } from "lucide-react"

export default function Component() {
  const [progress, setProgress] = useState(0)
  const [tasks, setTasks] = useState({
    planning: [false, false],
    development: [false, false, false, false, false, false, false, false, false, false],
    deployment: [false, false, false, false],
    marketing: [false, false, false, false, false, false]
  })

  useEffect(() => {
    const totalTasks = Object.values(tasks).flat().length
    const completedTasks = Object.values(tasks).flat().filter(Boolean).length
    setProgress((completedTasks / totalTasks) * 100)
  }, [tasks])

  const toggleTask = (section, index) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [section]: prevTasks[section].map((task, i) => i === index ? !task : task)
    }))
  }

  const sections = [
    {
      tab: 'planning',
      items: [
        {
          title: 'Brainstorming & Planning',
          icon: Brain,
          description: 'Use Claude/ChatGPT 4.0 for ideation',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Nail down the unique value proposition (UVP) and key features.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="planning-task-0"
                    checked={tasks.planning[0]}
                    onCheckedChange={() => toggleTask('planning', 0)}
                    className="mr-2"
                  />
                  <label htmlFor="planning-task-0" className="text-sm font-medium leading-none">
                    Generate user personas
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="planning-task-1"
                    checked={tasks.planning[1]}
                    onCheckedChange={() => toggleTask('planning', 1)}
                    className="mr-2"
                  />
                  <label htmlFor="planning-task-1" className="text-sm font-medium leading-none">
                    Craft features solving user pain points
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Prompt examples:</h3>
              <ul className="list-disc pl-5">
                <li>"Generate 3 app ideas for [industry/target market] that haven't been overdone."</li>
                <li>"What are common pain points for [user persona]? How can a web app solve these?"</li>
              </ul>
              <h3 className="font-semibold mt-4">Key Outcome:</h3>
              <p>Clear UVP and feature list addressing specific audience needs.</p>
            </>
          )
        }
      ]
    },
    {
      tab: 'development',
      items: [
        {
          title: 'App Scaffolding',
          icon: Code,
          description: 'Use v0 from Vercel for quick setup',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Get a head start with a clean, scalable foundation.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-0"
                    checked={tasks.development[0]}
                    onCheckedChange={() => toggleTask('development', 0)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-0" className="text-sm font-medium leading-none">
                    Create React/Next.js template with SSR
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-1"
                    checked={tasks.development[1]}
                    onCheckedChange={() => toggleTask('development', 1)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-1" className="text-sm font-medium leading-none">
                    Implement authentication
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-2"
                    checked={tasks.development[2]}
                    onCheckedChange={() => toggleTask('development', 2)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-2" className="text-sm font-medium leading-none">
                    Use pre-designed UI components from Shadcn
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Choose a minimalist design framework like Tailwind CSS for scalability.</p>
              <h3 className="font-semibold mt-4">Key Outcome:</h3>
              <p>A responsive, SEO-friendly app with modern feel.</p>
            </>
          )
        },
        {
          title: 'Boilerplate Generation',
          icon: Code,
          description: 'Use Claude/ChatGPT 4.0 for code generation',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Reduce time on repetitive coding tasks.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-3"
                    checked={tasks.development[3]}
                    onCheckedChange={() => toggleTask('development', 3)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-3" className="text-sm font-medium leading-none">
                    Generate boilerplate for user registration, password reset, CRUD operations
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-4"
                    checked={tasks.development[4]}
                    onCheckedChange={() => toggleTask('development', 4)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-4" className="text-sm font-medium leading-none">
                    Implement security features and SEO optimizations
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Prompt examples:</h3>
              <ul className="list-disc pl-5">
                <li>"Generate Next.js code for user registration with email confirmation."</li>
                <li>"Provide secure API routes for user authentication."</li>
              </ul>
            </>
          )
        },
        {
          title: 'Coding and Integration',
          icon: Code,
          description: 'Use Cursor for AI-assisted coding',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Streamline coding with AI assistance.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-5"
                    checked={tasks.development[5]}
                    onCheckedChange={() => toggleTask('development', 5)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-5" className="text-sm font-medium leading-none">
                    Set up Cursor for auto-completion and code refactoring
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Ask Cursor for performance optimizations.</p>
            </>
          )
        },
        {
          title: 'Version Control',
          icon: Github,
          description: 'Use GitHub for project management',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Keep project organized and collaboration-ready.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-6"
                    checked={tasks.development[6]}
                    onCheckedChange={() => toggleTask('development', 6)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-6" className="text-sm font-medium leading-none">
                    Set up GitHub repository with branching strategy
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-7"
                    checked={tasks.development[7]}
                    onCheckedChange={() => toggleTask('development', 7)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-7" className="text-sm font-medium leading-none">
                    Configure GitHub Projects for task management
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Leverage GitHub's code review feature for self-review or collaboration.</p>
            </>
          )
        },
        {
          title: 'Backend Services',
          icon: Zap,
          description: 'Use Firebase for DB and Auth',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Set up managed backend without infrastructure worries.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-8"
                    checked={tasks.development[8]}
                    onCheckedChange={() => toggleTask('development', 8)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-8" className="text-sm font-medium leading-none">
                    Implement Firebase authentication and Firestore database
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="development-task-9"
                    checked={tasks.development[9]}
                    onCheckedChange={() => toggleTask('development', 9)}
                    className="mr-2"
                  />
                  <label htmlFor="development-task-9" className="text-sm font-medium leading-none">
                    Set up real-time features
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Implement role-based authentication for different user types.</p>
            </>
          )
        }
      ]
    },
    {
      tab: 'deployment',
      items: [
        {
          title: 'Deployment',
          icon: Rocket,
          description: 'Use Vercel for continuous deployment',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Make your app live and performant.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="deployment-task-0"
                    checked={tasks.deployment[0]}
                    onCheckedChange={() => toggleTask('deployment', 0)}
                    className="mr-2"
                  />
                  <label htmlFor="deployment-task-0" className="text-sm font-medium leading-none">
                    Set up continuous deployment from GitHub to Vercel
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="deployment-task-1"
                    checked={tasks.deployment[1]}
                    onCheckedChange={() => toggleTask('deployment', 1)}
                    className="mr-2"
                  />
                  <label htmlFor="deployment-task-1" className="text-sm font-medium leading-none">
                    Configure Vercel Edge functions for improved performance
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Enable image optimization and code-splitting for better performance.</p>
            </>
          )
        },
        {
          title: 'Continuous Integration',
          icon: Github,
          description: 'Use GitHub Actions for CI/CD',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Automate deployments for quick feature releases.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="deployment-task-2"
                    checked={tasks.deployment[2]}
                    onCheckedChange={() => toggleTask('deployment', 2)}
                    className="mr-2"
                  />
                  <label htmlFor="deployment-task-2" className="text-sm font-medium leading-none">
                    Set up CI pipelines for automatic testing
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="deployment-task-3"
                    checked={tasks.deployment[3]}
                    onCheckedChange={() => toggleTask('deployment', 3)}
                    className="mr-2"
                  />
                  <label htmlFor="deployment-task-3" className="text-sm font-medium leading-none">
                    Configure GitHub Actions to trigger Vercel deployments
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Key Outcome:</h3>
              <p>Smooth, automated deployment process ensuring app is always up to date.</p>
            </>
          )
        }
      ]
    },
    {
      tab: 'marketing',
      items: [
        {
          title: 'Analytics and Payments',
          icon: BarChart,
          description: 'Use Google Analytics an Stripe',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Track user behavior and handle payments.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="marketing-task-0"
                    checked={tasks.marketing[0]}
                    onCheckedChange={() => toggleTask('marketing', 0)}
                    className="mr-2"
                  />
                  <label htmlFor="marketing-task-0" className="text-sm font-medium leading-none">
                    Set up custom events and goals in Google Analytics
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="marketing-task-1"
                    checked={tasks.marketing[1]}
                    onCheckedChange={() => toggleTask('marketing', 1)}
                    className="mr-2"
                  />
                  <label htmlFor="marketing-task-1" className="text-sm font-medium leading-none">
                    Implement Stripe Checkout API for payments
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Key Outcome:</h3>
              <p>Full visibility into user interactions and seamless payment system.</p>
            </>
          )
        },
        {
          title: 'Marketing Material',
          icon: Brain,
          description: 'Use ChatGPT/Claude for content creation',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Create captivating marketing content.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="marketing-task-2"
                    checked={tasks.marketing[2]}
                    onCheckedChange={() => toggleTask('marketing', 2)}
                    className="mr-2"
                  />
                  <label htmlFor="marketing-task-2" className="text-sm font-medium leading-none">
                    Generate website copy, email campaigns, and product descriptions
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="marketing-task-3"
                    checked={tasks.marketing[3]}
                    onCheckedChange={() => toggleTask('marketing', 3)}
                    className="mr-2"
                  />
                  <label htmlFor="marketing-task-3" className="text-sm font-medium leading-none">
                    Create compelling CTAs and value propositions
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Include testimonials or generate relatable use cases for better engagement.</p>
            </>
          )
        },
        {
          title: 'Social Media',
          icon: Share2,
          description: 'Use various platforms for organic growth',
          content: (
            <>
              <h3 className="font-semibold">Goal:</h3>
              <p>Build hype and generate organic growth.</p>
              <h3 className="font-semibold mt-4">Action:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="marketing-task-4"
                    checked={tasks.marketing[4]}
                    onCheckedChange={() => toggleTask('marketing', 4)}
                    className="mr-2"
                  />
                  <label htmlFor="marketing-task-4" className="text-sm font-medium leading-none">
                    Create content strategy for Twitter, TikTok, Instagram, and YouTube
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="marketing-task-5"
                    checked={tasks.marketing[5]}
                    onCheckedChange={() => toggleTask('marketing', 5)}
                    className="mr-2"
                  />
                  <label htmlFor="marketing-task-5" className="text-sm font-medium leading-none">
                    Implement hashtag strategy and trend monitoring
                  </label>
                </div>
              </div>
              <h3 className="font-semibold mt-4">Pro Tip:</h3>
              <p>Encourage user-generated content through challenges or experience sharing.</p>
            </>
          )
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">App Development & Deployment Dashboard</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Overall Progress</h2>
            <Progress value={progress} className="w-full h-2" />
            <p className="text-sm text-gray-500 mt-2">{Math.round(progress)}% complete</p>
          </div>
          <Tabs defaultValue="planning" className="space-y-8">
            <TabsList className="flex justify-center space-x-2">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.tab}
                  value={section.tab}
                  className="px-4 py-2 text-sm font-medium rounded-full transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {section.tab.charAt(0).toUpperCase() + section.tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            {sections.map((section) => (
              <TabsContent key={section.tab} value={section.tab}>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, index) => (
                    <Card key={item.title} className="overflow-hidden">
                      <CardHeader className="bg-primary text-primary-foreground">
                        <CardTitle className="flex items-center text-xl">
                          <item.icon className="mr-2 w-5 h-5" />
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-primary-foreground/80">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">{item.content}</div>
                        <div className="mt-6">
                          <h3 className="font-semibold text-lg mb-2">Relevant Tools/Resources:</h3>
                          <div className="bg-muted p-4 rounded-md">
                            <p className="text-sm text-muted-foreground">Resource link placeholder</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
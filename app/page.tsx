import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>E-commerce Website</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Built a responsive e-commerce platform using React, Node.js, and
                MongoDB.
              </p>
            </CardContent>
            <CardFooter>
              <Button>View Project</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
              <CardDescription>Portfolio Website</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Created a portfolio website using Next.js and shadcn UI
                components.
              </p>
            </CardContent>
            <CardFooter>
              <Button>View Project</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <Button className="mr-2">Contact Me</Button>
          <Button variant="outline">Download CV</Button>
        </div>
      </div>
    </main>
  );
}

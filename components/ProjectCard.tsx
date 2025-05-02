import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  buttonText: string;
  onButtonClick?: () => void;
  imageSrc?: string;
}

export function ProjectCard({
  title,
  description,
  content,
  buttonText,
  onButtonClick,
  imageSrc = "/assets/cardImg.png",
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      {imageSrc && (
        <div className="w-full h-[200px] relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}

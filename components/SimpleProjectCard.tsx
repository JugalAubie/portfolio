import Link from "next/link";
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

interface SimpleProjectCardProps {
  title: string;
  description: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  link?: string;
}

export function SimpleProjectCard({
  title,
  description,
  content,
  buttonText,
  onButtonClick,
  imageSrc = "/assets/cardImg.png",
  link = "#",
}: SimpleProjectCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    return link ? (
      <Link href={link} className="block h-full cursor-pointer">
        {children}
      </Link>
    ) : (
      <>{children}</>
    );
  };

  return (
    <CardWrapper>
      <Card className="overflow-hidden transition-all duration-200 h-full hover:shadow-lg hover:scale-[1.02]">
        {imageSrc && (
          <div className="aspect-video w-full relative">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
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
        {buttonText && (
          <CardFooter>
            <Button
              onClick={(e) => {
                if (onButtonClick) {
                  e.preventDefault();
                  onButtonClick();
                }
              }}
            >
              {buttonText}
            </Button>
          </CardFooter>
        )}
      </Card>
    </CardWrapper>
  );
}

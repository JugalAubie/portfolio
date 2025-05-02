import Link from "next/link";
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
  buttonText: string;
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
          <div className="w-full">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 object-cover"
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
      </Card>
    </CardWrapper>
  );
}

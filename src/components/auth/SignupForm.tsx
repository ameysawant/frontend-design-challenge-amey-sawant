import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/router/routes";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import MetaIcon from "@/components/icons/MetaIcon";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup and redirect
    navigate("/dashboard");
  };

  return (
    <>
      <Card className="w-full max-w-sm rounded-xl shadow-xl border-0">
        <CardHeader className="text-center px-8">
          <CardTitle className="text-3xl font-semibold">Sign up</CardTitle>
          <CardDescription className="text-sm font-medium text-paragraph mt-2">
            Already have an account?{" "}
            <Link
              to={ROUTES.login}
              className="text-teal-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input id="firstName" type="text" placeholder="First name" />
            <Input id="lastName" type="text" placeholder="Last name" />
            <Input id="email" type="email" placeholder="Email Address" />

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:bg-transparent cursor-pointer h-8 w-8"
              >
                {showPassword ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeClosed className="size-4" />
                )}
              </Button>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <Checkbox id="agreeToTerms" className="mt-0.5" />
              <Label
                htmlFor="agreeToTerms"
                className="text-xs text-paragraph leading-relaxed cursor-pointer select-none"
              >
                I agree to App's{" "}
                <Link to="#" className="text-teal-600 hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and acknowledge the{" "}
                <Link to="#" className="text-teal-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col px-8">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded-full mb-2"
          >
            Create Account
          </Button>
          <div className="flex flex-col items-center gap-3 mt-1">
            <div className="flex items-center gap-2 mt-2">
              <Link
                to="#"
                className="bg-black text-white rounded-full py-2 px-8 transition-opacity hover:opacity-90"
              >
                <AppleIcon />
              </Link>
              <Link
                to="#"
                className="bg-[#f9f2ef] rounded-full py-2 px-8 transition-opacity hover:opacity-90"
              >
                <GoogleIcon />
              </Link>
              <Link
                to="#"
                className="bg-[#3d6ddf] text-white rounded-full py-2 px-8 transition-opacity hover:opacity-90"
              >
                <MetaIcon />
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupForm;

import { Link } from "react-router-dom";
import { CheckIcon, StarIcon } from "lucide-react";
import Logo from "@/components/icons/Logo";
import { ROUTES } from "@/router/routes";

const features = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
];

const AuthHero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between py-10">
      <Link
        to={ROUTES.home}
        className="flex items-center gap-2.5 w-fit"
        aria-label="Fenrir Security Home"
      >
        <Logo />
      </Link>

      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-6">
            Expert level Cybersecurity
            <br />
            in <span className="text-primary">hours</span> not weeks.
          </h1>

          <p className="text-white text-xs font-semibold mb-4 uppercase tracking-widest">
            What's included
          </p>
          <ul className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon
                  className="size-4 text-primary shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <span className="text-white text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <StarIcon className="size-4 text-emerald-400 fill-emerald-400" />
            <span className="text-white text-sm font-medium">Trustpilot</span>
          </div>
          <p className="text-white text-sm font-semibold">
            Rated 4.5/5.0{" "}
            <span className="text-white/40 font-normal text-xs">
              {" "}
              (100k+ reviews)
            </span>
          </p>
        </div>
      </div>

      <div />
    </div>
  );
};

export default AuthHero;

"use client";

import { useCurrentTheme } from "@/hooks/use-current-theme";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Page = () => {

  const currentTheme = useCurrentTheme();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <section className="space-y-6">
        <div className="flex flex-col items-center">
          <SignIn 
          appearance={{
            baseTheme: currentTheme === "dark" ? dark : undefined,
            elements :{
              cardBox: "border! shadow-none! rounded-lg!"
            },
          }}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;

"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const SignIn = () => {
  const [providers, setProviders] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <Tabs defaultValue="signin" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Access your account with your credentials.
            </CardDescription>
          </CardHeader> 
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="text-center my-4">
              <span className="text-gray-500">or</span>
            </div>
            {providers && (
              <div className="flex justify-center black_btn">
                {Object.values(providers).map((provider) => (
                  <Button
                    key={provider.name}
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: '/', // Specify where to redirect after sign-in
                      })
                    }
                    className="flex items-center"
                  >
                    <Image 
                      src="/assets/images/google.png" // Path to Google logo
                      alt="Google Logo"
                      width={20}
                      height={20}
                    />
                    ㅤSign in with {provider.name}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            {/* Optionally include any additional footer content here */}
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create a new account by providing your details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <button className = "black_btn">Sign Up</button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SignIn;

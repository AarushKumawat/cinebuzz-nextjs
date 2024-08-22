"use client";
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
import Link from 'next/link';

const SignIn = () => {
  const [providers, setProviders] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // For sign-up
  const [username, setUsername] = useState(""); // For sign-up
  const [confirmPassword, setConfirmPassword] = useState(""); // For sign-up
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok){
        localStorage.setItem('token', data.access_token);
        window.location.href = '/movies'
      }
      else{
        throw new Error('Login failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }
      window.location.href = '/sign-in'
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <Tabs defaultValue="signin" className="w-[400px]">
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
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                  <div className="text-red-500">
                    {error}
                  </div>
              )}
              <Button onClick={handleSignIn} className="black_btn">
                Sign In
              </Button>
              <div className="text-center my-4">
                <span className="text-gray-500">or</span>
              </div>
              {providers && (
                  <div className="flex justify-center">
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
            <CardFooter className="flex justify-end">
              <Link href="/admin-sign-in">
                <div className="text-sm cursor-pointer hover:underline hover:text-blue-700">
                  Are you an admin?
                </div>
              </Link>
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
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && (
                  <div className="text-red-500">
                    {error}
                  </div>
              )}
              <Button onClick={handleSignUp} className="black_btn">
                Sign Up
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
  );
};

export default SignIn;

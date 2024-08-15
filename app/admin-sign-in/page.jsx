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

const AdminSignIn = () => {
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
        <TabsTrigger value="signin"className ="flex flex-center">Admin Login</TabsTrigger>
       
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
              <Label htmlFor="name">Email id</Label>
              <Input id="name"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            
           
          </CardContent>
          <CardFooter>
            {/* Optionally include any additional footer content here */}
          </CardFooter>
        </Card>
      </TabsContent>
     
    </Tabs>
  );
};

export default AdminSignIn;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ContactMessage } from "@shared/schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Mail } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Email configuration form schema
const emailConfigSchema = z.object({
  user: z.string().email({ message: "Please enter a valid email address" }),
  pass: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type EmailConfigFormData = z.infer<typeof emailConfigSchema>;

export default function AdminPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("email");
  
  // Fetch contact messages
  const { data: contactMessages, isLoading, error } = useQuery({
    queryKey: ['/api/contact'],
    enabled: activeTab === 'messages',
  });

  // Email config form
  const emailForm = useForm<EmailConfigFormData>({
    resolver: zodResolver(emailConfigSchema),
    defaultValues: {
      user: "",
      pass: "",
    },
  });

  // Email config mutation
  const emailConfigMutation = useMutation({
    mutationFn: (data: EmailConfigFormData) => {
      return apiRequest("POST", "/api/config/email", data);
    },
    onSuccess: () => {
      toast({
        title: "Email Configuration Updated",
        description: "Your email settings have been saved successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Configuration Error",
        description: error.message || "There was a problem saving your email settings.",
        variant: "destructive",
      });
    },
  });

  // Submit email config form
  function onEmailConfigSubmit(data: EmailConfigFormData) {
    emailConfigMutation.mutate(data);
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <div className="max-w-3xl mx-auto">
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Secure Area</AlertTitle>
          <AlertDescription>
            This page contains sensitive configuration settings for your website.
            In a production environment, this should be protected with proper authentication.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="email" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email">Email Configuration</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Email Configuration</CardTitle>
                <CardDescription>
                  Configure the email service to send notification emails when users submit the contact form.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(onEmailConfigSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <FormField
                        control={emailForm.control}
                        name="user"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your-app-email@gmail.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              This should be a Gmail account you've created specifically for your application.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={emailForm.control}
                        name="pass"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>App Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Your app-specific password" {...field} />
                            </FormControl>
                            <FormDescription>
                              Use an app-specific password generated in your Google Account security settings.
                              Never use your main Google account password here.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={emailConfigMutation.isPending}
                    >
                      {emailConfigMutation.isPending ? "Saving..." : "Save Email Configuration"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex flex-col">
                <div className="text-sm text-gray-500 mb-2">
                  <p className="font-medium flex items-center">
                    <Mail className="h-4 w-4 mr-1" /> Configuration Instructions:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 mt-2">
                    <li>Create a Gmail account specifically for sending notifications</li>
                    <li>Enable 2-factor authentication on that Gmail account</li>
                    <li>Generate an "App Password" in your Google account security settings</li>
                    <li>Use that app password in the form above</li>
                  </ol>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>
                  View all messages submitted through your contact form.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center items-center py-10">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                  </div>
                ) : error ? (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      There was a problem loading your contact messages.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <div className="space-y-6">
                    {contactMessages?.length === 0 ? (
                      <p className="text-center py-10 text-gray-500">No messages found.</p>
                    ) : (
                      contactMessages?.map((message: ContactMessage) => (
                        <div 
                          key={message.id} 
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{message.name}</h3>
                              <p className="text-sm text-blue-600">{message.email}</p>
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(message.createdAt).toLocaleString()}
                            </div>
                          </div>
                          <div className="mb-2">
                            <span className="text-sm font-medium text-gray-500">Subject:</span>
                            <span className="ml-2">{message.subject}</span>
                          </div>
                          <p className="mt-2 text-gray-700 whitespace-pre-line">{message.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
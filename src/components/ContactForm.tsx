'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
    name: z.string({ required_error: 'Please add your name' }).min(2, {
        message: 'Name must have at least 2 characters.',
    }),
    email: z
        .string({ required_error: 'Please add your email address' })
        .email(),
    message: z
        .string({ required_error: 'Please add your message.' })
        .min(15, {
            message: 'Message must have at least 15 characters.',
        })
        .max(160, {
            message: 'Message must not have more than 30 characters.',
        }),
});

export default function ContactForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: '', email: '', message: '' },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        toast({
            description: `Hey ${values.name}, Your message has been sent.`,
        });
        form.reset({ name: '', email: '', message: '' });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8 pb-10 text-brand-gray-dark'
            >
                {/* Name input */}
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='John Doe'
                                    {...field}
                                    className='rounded-xl border-brand-gray-dark bg-brand-black py-8 focus:ring-offset-brand-accent'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Email input */}
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='johndoe@example.com'
                                    type='email'
                                    {...field}
                                    className='rounded-xl border-brand-gray-dark bg-brand-black py-8 focus:ring-offset-brand-accent'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Message input */}
                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Tell us a little bit about your experience'
                                    className='resize-none rounded-xl border-brand-gray-dark bg-brand-black py-8 focus:ring-offset-brand-accent'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type='submit'
                    className='w-full rounded-full bg-brand-accent py-8 text-brand-black hover:bg-brand-accent/80'
                >
                    SEND MESSAGE
                </Button>
            </form>
        </Form>
    );
}

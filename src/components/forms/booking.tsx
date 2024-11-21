'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { cn } from '@src/lib/utils';
import { Button } from '@src/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@src/components/ui/form';
import { Input } from '@src/components/ui/input';
import { Calendar } from '@src/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@src/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@src/components/ui/select';

import { useToast } from '@src/hooks/use-toast';
import { Calendar1 } from 'lucide-react';

import { availableTimes } from '@src/app/data';
import { bookingSchema } from '@src/lib/schemas';

const BookingForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      numberOfGuests: 0,
      time: '',
    },
  });

  const onSubmit = (values: z.infer<typeof bookingSchema>) => {
    toast({
      description: `Hey ${values.name}, Your booking is confirmed.`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='text-brand-gray-dark space-y-8 pb-10'
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
                  className='border-brand-gray-dark bg-brand-black focus:ring-offset-brand-accent rounded-xl py-8'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Guests Input */}
        <FormField
          control={form.control}
          name='numberOfGuests'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Number of Guests</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  min={0}
                  max={10}
                  placeholder='0'
                  {...field}
                  className='border-brand-gray-dark bg-brand-black focus:ring-offset-brand-accent rounded-xl py-8'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex w-full flex-col flex-wrap gap-4 md:flex-row'>
          {/* Date Input */}
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='text-lg'>Date of Reservation</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'border-brand-gray-dark bg-brand-black hover:bg-brand-gray-dark/30 hover:text-brand-white focus:ring-offset-brand-accent flex w-[240px] justify-start gap-4 rounded-xl py-8 pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        <Calendar1 color=' #4b4b4b' />
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Time Input */}
          <FormField
            control={form.control}
            name='time'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel className='text-lg'>Time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='border-brand-gray-dark bg-brand-black hover:bg-brand-gray-dark/30 hover:text-brand-white focus:ring-offset-brand-accent w-[240px] justify-between rounded-xl py-8'>
                      <SelectValue placeholder='Select a time' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className='pl-8 font-medium'>
                        Available Times
                      </SelectLabel>
                      {availableTimes.map((time) => (
                        <SelectItem value={time.value} key={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type='submit'
          className='bg-brand-accent text-brand-black hover:bg-brand-accent/80 w-full rounded-full py-8'
        >
          BOOK A TABLE
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;

'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { DateInput } from '@/components/ui/date-input';
import indianStates from '@/data/indian-states.json';

type Props = {
  className?: string;
  onFormSubmit: (data: FormValues) => void;
};

const sevaTypes = [
  {
    name: 'One Day Temple Seva',
    value: 'one_day_temple_seva',
    amount: 4501,
  },
  {
    name: 'One Day Prasadam Seva',
    value: 'one_day_prasadam_seva',
    amount: 2501,
  },
  {
    name: 'One Day Sankirtan Seva',
    value: 'one_day_sankirtan_seva',
    amount: 1551,
  },
  {
    name: 'Raaj Bhog',
    value: 'raaj_bhog',
    amount: 2051,
  },
  {
    name: 'Ballo Bhog',
    value: 'ballo_bhog',
    amount: 501,
  },
  {
    name: 'Prato Rash Bhog',
    value: 'prato_rash_bhog',
    amount: 551,
  },
  {
    name: 'Afternoon Bhog',
    value: 'afternoon_bhog',
    amount: 551,
  },
  {
    name: 'Nisho Bhog',
    value: 'nisho_bhog',
    amount: 751,
  },
  {
    name: 'Archan Seva with Dhoop',
    value: 'archan_seva_with_dhoop',
    amount: 251,
  },
  {
    name: 'Others -- Rice, Dal, Cooking Oil, etc',
    value: 'others',
    amount: 0,
  },
];

const preferred_languages = [
  {
    name: 'English',
    value: 'english',
  },
  {
    name: 'Hindi',
    value: 'hindi',
  },
  {
    name: 'Bengali',
    value: 'bengali',
  },
];

const FormSchema = z.object({
  seva_type: z.string().min(1, {
    message: 'Please provide a valid seva type',
  }),
  amount: z.string().min(1, {
    message: 'Please provide a valid amount',
  }),
  name: z.string().min(1, {
    message: 'Please provide a valid name',
  }),
  initiatedName: z.string().optional(),
  dob: z.date().optional(),
  anniversary: z.date().optional(),
  email: z
    .string()
    .email({
      message: 'Please provide a valid email',
    })
    .optional(),
  phone: z.string().min(10).max(10, {
    message: 'Please provide a valid phone number',
  }),
  street_address: z.string().min(1, {
    message: 'Please provide a valid address',
  }),
  city: z.string().min(1, {
    message: 'Please provide a valid city',
  }),
  state: z.string().min(1, {
    message: 'Please provide a valid state',
  }),
  postal_code: z.string().min(6).max(6, {
    message: 'Please provide a valid postal code',
  }),
  pan_number: z
    .string()
    .min(10)
    .max(10, {
      message: 'Please provide a valid PAN number',
    })
    .optional(),
  preferred_language: z
    .string()
    .min(1, {
      message: 'Please provide a valid language',
    })
    .optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const NityaSevaForm: React.FC<Props> = ({ className, onFormSubmit }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      amount: '',
    },
  });

  const { watch, setValue } = form;

  const watchSevaType = watch('seva_type');
  const watchAmount = watch('amount');

  useEffect(() => {
    const sevaType = watchSevaType;
    if (sevaType !== 'others') {
      setValue('amount', '');
    }
  }, [watchSevaType, setValue]);

  const onSubmit = (data: FormValues) => {
    //console.log(data, 'data submitted', 'watch', watch('name'));
    onFormSubmit(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-6', className)}
      >
        <FormField
          control={form.control}
          name="seva_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="seva_type" required>
                Select Seva
              </FormLabel>

              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select seva" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sevaTypes.map((sevaType) => (
                    <SelectItem
                      key={sevaType.value}
                      value={sevaType.value}
                      className="text-sm"
                    >
                      <span>{sevaType.name}</span>
                      <span className="font-semibold ml-2">
                        {sevaType.amount ? `(₹${sevaType.amount})` : null}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {Number(watchAmount) ? (
                <FormDescription>
                  {`You are contributing ₹${watchAmount} for the seva of the lord. Hare Krishna!`}
                </FormDescription>
              ) : null}
              <FormMessage {...field} />
            </FormItem>
          )}
        ></FormField>

        {watch('seva_type') === 'others' && (
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="initiatedName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Initiated Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter initiated name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <div className="md:grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <DateInput {...field} />

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anniversary"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Anniversary</FormLabel>
                <DateInput {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}

        <div className="md:grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="street_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="md:grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem
                        key={state.code}
                        value={state.code}
                        className="text-sm"
                      >
                        <span>{state.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter postal code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="pan_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PAN Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter PAN number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>
        {/* <FormField
          control={form.control}
          name="preferred_language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Language</FormLabel>

              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {preferred_languages.map((language) => (
                    <SelectItem
                      key={language.value}
                      value={language.value}
                      className="text-sm"
                    >
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage {...field} />
            </FormItem>
          )}
        /> */}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NityaSevaForm;

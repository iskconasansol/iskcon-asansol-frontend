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
import { DateInput } from '@/components/ui/date-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import indianStates from '@/data/indian-states.json';

type Props = {
  className?: string;
  isLoading?: boolean;
  onFormSubmit: (data: FormValues) => void;
};

const donationTypes = [
  {
    name: '11 Gita Books',
    value: '11',
    amount: 2750,
  },
  {
    name: '21 Gita Books',
    value: '21',
    amount: 5250,
  },
  {
    name: '51 Gita Books',
    value: '51',
    amount: 12750,
  },
  {
    name: '108 Gita Books',
    value: '108',
    amount: 27000,
  },
  {
    name: '251 Gita Books',
    value: '251',
    amount: 62750,
  },
  {
    name: '501 Gita Books',
    value: '501',
    amount: 125250,
  },
  {
    name: '1008 Gita Books',
    value: '1008',
    amount: 252000,
  },
];

const FormSchema = z.object({
  seva_type: z.string({
    required_error: 'Please select type of seva',
  }),
  amount: z.string(),
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
});

type FormValues = z.infer<typeof FormSchema>;

const NityanandaTrayodasiForm: React.FC<Props> = ({
  className,
  onFormSubmit,
  isLoading,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
    },
  });

  const { watch, setValue } = form;

  const watchSevaType = watch('seva_type');

  const watchAmount = watch('amount');

  useEffect(() => {
    const donationType = donationTypes.find((type) => type.value === watchSevaType);
    if (donationType) {
      setValue('amount', String(donationType.amount));
    }
  }, [watchSevaType, setValue]);

  const onSubmit = (data: FormValues) => {
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
                Select quantity
              </FormLabel>

              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {donationTypes.map((type) => (
                    <SelectItem
                      key={type.value}
                      value={type.value}
                      className="text-sm"
                    >
                      <span>{type.name}</span>
                      <span className="font-semibold ml-2">
                        {type.amount ? `(₹${type.amount})` : null}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {Number(watchAmount) ? (
                <FormDescription>
                  {`You are contributing ₹${watchAmount} by donating ${watchSevaType} Gita books. Hare Krishna!`}
                </FormDescription>
              ) : null}
              <FormMessage {...field} />
            </FormItem>
          )}
        ></FormField>

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

        {/* <div className="grid md:grid-cols-2 gap-6">
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
                <FormLabel>City</FormLabel>
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
                <FormLabel>State</FormLabel>
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
                <FormLabel>Postal Code</FormLabel>
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

        <Button type="submit" loading={isLoading}>
          Submit
        </Button>

        {Number(watchAmount) > 0 ? (
          <div className="mt-4 sticky bottom-2 bg-white p-4 text-center border border-gray-400 rounded-md shadow-md ">
            <div className="flex justify-between items-center">
              <span>Your contribution</span>
              <span className="font-semibold">₹{watchAmount}</span>
            </div>
          </div>
        ) : null}
      </form>
    </Form>
  );
};

export default NityanandaTrayodasiForm;

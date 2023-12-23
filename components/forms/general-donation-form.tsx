import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
  isLoading?: boolean;
  onFormSubmit: (data: FormValues) => void;
};

const FormSchema = z.object({
  amount: z.string({ required_error: 'Please provide an amount' }).min(1, {
    message: 'Please provide an amount',
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
});

type FormValues = z.infer<typeof FormSchema>;

const defaultAmount = '100';

const GeneralDonationForm: React.FC<Props> = ({
  className,
  onFormSubmit,
  isLoading,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      amount: defaultAmount,
    },
  });

  const { watch } = form;
  const onSubmit = (data: FormValues) => {
    onFormSubmit(data);
  };

  const watchAmount = watch('amount');

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-6', className)}
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter your contribution amount"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                We have added a default contribution of ₹ {defaultAmount}. You
                can contribute a higher amount if you wish. Hare Krishna!
              </FormMessage>
            </FormItem>
          )}
        />

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

        <FormField
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
        />

        <div className="grid md:grid-cols-2 gap-4">
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

        <div className="grid md:grid-cols-2 gap-4">
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
                <FormControl>
                  <Input placeholder="Enter state" {...field} />
                </FormControl>
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

          <FormField
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
          />
        </div>

        <Button type="submit" loading={isLoading}>
          Submit
        </Button>

        {Number(watchAmount) > 0 ? (
          <div className="mt-4 sticky bottom-2 bg-white p-4 text-center border border-gray-400 rounded-md shadow-md ">
            <p>
              You are contributing{' '}
              <span className="font-semibold">₹{watchAmount}</span> towards the
              construction of our future temple. Hare Krishna!
            </p>
          </div>
        ) : null}
      </form>
    </Form>
  );
};

export default GeneralDonationForm;

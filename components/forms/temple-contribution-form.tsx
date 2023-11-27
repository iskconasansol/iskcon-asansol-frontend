'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { z } from 'zod';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const schema = z.object({
  squareFeetContribution: z.number().min(1).optional(),
  laborCharges: z.number().min(1).optional(),
  brickContribution: z.number().min(10).optional(),
  cementContribution: z.number().min(1).optional(),
  ironRodContribution: z.number().min(1).optional(),
  otherContribution: z.number().min(1).optional(),
  name: z.string(),
});

type FormValues = z.infer<typeof schema>;

const TempleContributionForm: React.FC<Props> = ({ className }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      laborCharges: 0,
      brickContribution: 0,
      cementContribution: 0,
      ironRodContribution: 0,
      squareFeetContribution: 0,
      otherContribution: 0,
      name: '',
    },
  });

  const { handleSubmit, watch } = form;

  const calculateTotalCost = () => {
    // Implement your cost calculation logic based on user contributions
    // This is just a placeholder, replace it with your actual calculation
    const laborCharges = watch('laborCharges') || 0;
    const brickContribution = watch('brickContribution') || 0;
    const cementContribution = watch('cementContribution') || 0;
    const ironRodContribution = watch('ironRodContribution') || 0;
    const squareFeetContribution = watch('squareFeetContribution') || 0;
    const otherContribution = watch('otherContribution') || 0;
    return (
      laborCharges * 1750 + // Assuming ₹1750 per day
      brickContribution * 8 + // Assuming ₹8 per brick
      cementContribution * 350 + // Assuming ₹350 per bag
      ironRodContribution * 600 + // Assuming ₹600 per rod
      squareFeetContribution * 3000 + // Assuming ₹3000 per square foot
      otherContribution
    );
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data, 'data');
    // You can perform additional actions here, such as submitting data to a server.
    // For now, let's navigate to a different page.
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('space-y-8', className)}
      >
        <FormField
          control={form.control}
          name="squareFeetContribution"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="squareFeetContribution">
                Square feet contribution
              </FormLabel>

              <Select
                onValueChange={field.onChange}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sqft" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1 sqft</SelectItem>
                  <SelectItem value="2">2 sqft</SelectItem>
                  <SelectItem value="3">3 sqft</SelectItem>
                  <SelectItem value="4">4 sqft</SelectItem>
                  <SelectItem value="5">5 sqft</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              <FormDescription>
                {`Enter the square feet you wish to contribute towards the temple. 
                    The cost of construction is ₹3000 per square feet`}
              </FormDescription>
              <FormMessage {...field} />
            </FormItem>
          )}
        ></FormField>

        <p className="space-y-2">
          or you can contribute construction materials
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="laborCharges"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Labour Charges</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select no of days worth of labour charges" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 day</SelectItem>
                    <SelectItem value="2">2 days</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="4">4 days</SelectItem>
                    <SelectItem value="5">5 days</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  {`Enter the number of days worth of labour charges you wish to contribute towards the temple. 
                    The cost of labour is ₹1750 per day`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="brickContribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brick Contribution</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter no of bricks"
                  {...field}
                />
                <FormDescription>
                  {`Enter the number of bricks you wish to contribute towards the temple. 
                    The cost of each brick is ₹8`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="cementContribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cement Contribution</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter no of bags"
                  {...field}
                />
                <FormDescription>
                  {`Enter the number of cement bags you wish to contribute towards the temple. 
                    The cost of each bag is ₹350`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="ironRodContribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Iron Rod Contribution</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter no of rods"
                  {...field}
                />
                <FormDescription>
                  {`Enter the number of iron rods you wish to contribute towards the temple. 
                    The cost of each rod is ₹600`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="otherContribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Contribution</FormLabel>
                <Input type="number" placeholder="Enter amount" {...field} />
                <FormDescription>
                  {`Enter the amount you wish to contribute towards the temple. 
                    You can also contribute towards the temple construction by donating any amount`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <Button type="submit">Submit</Button>
      </form>

      <div className="mt-4">
        <p className="text-xl font-semibold">Total</p>
        <p>{`You are contributing ₹${calculateTotalCost()}`}</p>
      </div>
    </Form>
  );
};

export default TempleContributionForm;

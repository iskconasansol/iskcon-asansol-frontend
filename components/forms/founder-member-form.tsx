import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  className?: string;
};

const FormSchema = z.object({
  initials: z
    .string()
    .refine((initials) => ['sri', 'smt', 'kumar'].includes(initials)),
  first_name: z.string(),
  middle_name: z.string().optional(),
  last_name: z.string(),
  pan_number: z.string().min(10).max(10).optional(),
  aadhar_number: z.string().min(12).max(10).optional(),
  house_number: z.string(),
  street_address: z.string(),
  city: z.string(),
  state: z.string(),
  pin_code: z.string(),
  phone_number: z.string().min(10).max(10),
  company_name: z.string().optional(),
  company_house_number: z.string().optional(),
  company_street_address: z.string().optional(),
  company_city: z.string().optional(),
  company_state: z.string(),
  company_pin_code: z.string().min(6).max(6).optional(),
  company_phone_number: z.string().min(10).max(10).optional(),
  occupation: z.string().optional(),
  business_type: z.string().optional(),
  preferred_mailing_address: z.string(),
  preferred_language: z
    .string()
    .refine((lang) => ['english', 'hindi', 'bengali'].includes(lang))
    .optional(),
  family_info: z
    .array(
      z.object({
        name: z.string(),
        relation: z.string(),
        dob: z.string(),
      })
    )
    .optional(),
  parent_names: z.array(
    z.object({
      name: z.string(),
      relation: z.string(),
    })
  ),
});

type FormValues = z.infer<typeof FormSchema>;

const FounderMemberForm: React.FC<Props> = ({ className }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  return (
    <Form {...form}>
      <form className={cn('', className)}></form>
    </Form>
  );
};

export default FounderMemberForm;

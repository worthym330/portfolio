'use client';

import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from '@/components/animations';
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type InvoiceFormValues = {
  invoiceNumber: string;
  date: Date;
  dueDate: Date;
  fromName: string;
  fromEmail: string;
  fromAddress: string;
  toName: string;
  toEmail: string;
  toAddress: string;
  items: {
    description: string;
    quantity: number;
    price: number;
  }[];
  notes: string;
};

export default function InvoicePage() {
  const { register, handleSubmit, watch, setValue } = useForm<InvoiceFormValues>({
    defaultValues: {
      items: [{ description: '', quantity: 0, price: 0 }],
    },
  });

  const items = watch('items');
  const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  const onSubmit = (data: InvoiceFormValues) => {
    console.log(data);
  };

  const addItem = () => {
    setValue('items', [...items, { description: '', quantity: 0, price: 0 }]);
  };

  const removeItem = (index: number) => {
    setValue('items', items.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-12 md:py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">Invoice</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Invoice Details */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Invoice Number</label>
                  <Input {...register('invoiceNumber')} placeholder="INV-001" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !watch('date') && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {watch('date') ? format(watch('date'), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={watch('date')}
                        onSelect={(date) => setValue('date', date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Due Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !watch('dueDate') && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {watch('dueDate') ? format(watch('dueDate'), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={watch('dueDate')}
                        onSelect={(date) => setValue('dueDate', date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* From Details */}
              <div className="space-y-4">
                <h3 className="font-semibold">From</h3>
                <Input {...register('fromName')} placeholder="Your Name" />
                <Input {...register('fromEmail')} placeholder="your@email.com" type="email" />
                <Textarea {...register('fromAddress')} placeholder="Your Address" />
              </div>

              {/* To Details */}
              <div className="space-y-4">
                <h3 className="font-semibold">Bill To</h3>
                <Input {...register('toName')} placeholder="Client Name" />
                <Input {...register('toEmail')} placeholder="client@email.com" type="email" />
                <Textarea {...register('toAddress')} placeholder="Client Address" />
              </div>
            </div>
          </Card>

          {/* Items */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Items</h3>
            <div className="space-y-4">
              {items.map((_, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <Input
                      {...register(`items.${index}.description`)}
                      placeholder="Item description"
                    />
                  </div>
                  <div>
                    <Input
                      {...register(`items.${index}.quantity`, { valueAsNumber: true })}
                      type="number"
                      placeholder="Quantity"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Input
                      {...register(`items.${index}.price`, { valueAsNumber: true })}
                      type="number"
                      placeholder="Price"
                    />
                    {items.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addItem}>
                Add Item
              </Button>
            </div>

            <div className="mt-4 text-right">
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </Card>

          {/* Notes */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Notes</h3>
            <Textarea {...register('notes')} placeholder="Additional notes..." />
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="submit">Generate Invoice</Button>
          </div>
        </form>
      </FadeIn>
    </div>
  );
}
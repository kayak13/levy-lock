import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Check, FileIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { intakeFormSchema, type IntakeFormData } from "@/lib/validation";

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeFormModal({ isOpen, onClose }: IntakeFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<IntakeFormData>({
    resolver: zodResolver(intakeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      judgmentAmount: 0,
      courtCountyState: "",
      caseNumber: "",
      judgmentYear: new Date().getFullYear(),
      debtorName: "",
      notes: "",
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const validFiles: File[] = [];
    const maxSize = 10 * 1024 * 1024; // 10MB

    Array.from(files).forEach((file) => {
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB. Please choose a smaller file.`,
          variant: "destructive",
        });
        return;
      }
      validFiles.push(file);
    });

    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: IntakeFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      
      // Add form fields
      formData.append('access_key', process.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('judgmentAmount', data.judgmentAmount.toString());
      formData.append('courtCountyState', data.courtCountyState);
      formData.append('caseNumber', data.caseNumber);
      formData.append('judgmentYear', data.judgmentYear.toString());
      formData.append('debtorName', data.debtorName || '');
      formData.append('notes', data.notes || '');

      // Add files
      uploadedFiles.forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Case submitted successfully!",
          description: "Our team will contact you within 24 hours.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setUploadedFiles([]);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-intake-form">
        <DialogHeader className="sticky top-0 bg-white border-b border-stone-200 pb-4">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {isSuccess ? "Case Submitted Successfully!" : "Free Case Review"}
          </DialogTitle>
          {!isSuccess && (
            <p className="text-gray-600 mt-2">
              Tell us about your judgment and we'll evaluate your recovery options
            </p>
          )}
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Case Submitted Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Our team will review your judgment and contact you within 24 hours with next steps.
              </p>
              
              <Card className="bg-stone-50 rounded-xl p-6 mb-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-gray-900 mb-3">What happens next:</h4>
                  <div className="space-y-2 text-sm text-gray-600 text-left">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep all judgment paperwork and court documents organized</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Gather any known employer or bank information about the debtor</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Watch for our call or email with your case evaluation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                onClick={handleClose}
                className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                data-testid="button-close-success"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter your email" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="Enter your phone number" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Judgment Information */}
                  <div className="border-t border-stone-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Judgment Details</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="judgmentAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Judgment Amount *</FormLabel>
                            <FormControl>
                              <Input 
                                type="number"
                                placeholder="Enter amount" 
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                data-testid="input-judgment-amount"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="judgmentYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Judgment Year *</FormLabel>
                            <FormControl>
                              <Input 
                                type="number"
                                placeholder="Enter year" 
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || new Date().getFullYear())}
                                data-testid="input-judgment-year"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="courtCountyState"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Court, County & State *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Superior Court of Los Angeles County, California" 
                              {...field} 
                              data-testid="input-court-county-state"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="caseNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Case Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter case number" 
                              {...field} 
                              data-testid="input-case-number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="debtorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Debtor Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter debtor name (optional)" 
                              {...field} 
                              data-testid="input-debtor-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="border-t border-stone-200 pt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Documents
                    </label>
                    <div className="file-drop-zone rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Upload judgment documents, court papers, or related files
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        data-testid="input-file-upload"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className="text-gold hover:text-gold-dark font-medium"
                        data-testid="button-choose-files"
                      >
                        Choose Files
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        PDF, JPG, JPEG, PNG (max 10MB each)
                      </p>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="mt-2 space-y-1" data-testid="file-list">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between text-sm text-gray-600 bg-stone-50 rounded p-2"
                          >
                            <span className="flex items-center gap-2">
                              <FileIcon className="w-4 h-4" />
                              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 h-6 w-6 p-0"
                              data-testid={`button-remove-file-${index}`}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any additional information about your case, previous collection attempts, or debtor details..."
                            rows={4}
                            {...field} 
                            data-testid="textarea-notes"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="border-t border-stone-200 pt-6">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-dark text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
                      data-testid="button-submit-case"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Case for Review"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      By submitting, you agree to be contacted about your judgment enforcement case.
                    </p>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

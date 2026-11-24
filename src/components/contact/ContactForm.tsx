 "use client";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight,LoaderCircle} from "lucide-react";
import {contactSchema,type ContactFormValues} from "@/lib/validations";
import {services} from "@/data/services";
export function ContactForm(){
 const [status,setStatus]=useState<{type:"success"|"error";message:string}|null>(null);
 const {register,handleSubmit,reset,formState:{errors,isSubmitting}}=useForm<ContactFormValues>({resolver:zodResolver(contactSchema)});
 async function submit(values:ContactFormValues){
  setStatus(null);
  try{
   const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});
   const result=await response.json();
   if(!response.ok){setStatus({type:"error",message:result.error||"We could not send your inquiry. Please contact us directly."});return;}
   setStatus({type:"success",message:"Your inquiry has been sent. The Solton team will be in touch."});reset();
  }catch{setStatus({type:"error",message:"We could not connect to the inquiry service. Please contact us by phone or email."});}
 }
 return <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
  <div className="form-heading"><span className="eyebrow">Project inquiry</span><h2>Tell us what you’re working on.</h2><p>Share a few details and we’ll route your inquiry to the right team.</p></div>
  <div className="form-grid">
   <label className="form-field"><span>Full name <b>*</b></span><input autoComplete="name" placeholder="Your full name" {...register("fullName")} aria-invalid={!!errors.fullName}/>{errors.fullName&&<small className="field-error">{errors.fullName.message}</small>}</label>
   <label className="form-field"><span>Email address <b>*</b></span><input autoComplete="email" type="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email}/>{errors.email&&<small className="field-error">{errors.email.message}</small>}</label>
   <label className="form-field"><span>Telephone <b>*</b></span><input autoComplete="tel" type="tel" placeholder="+256 ..." {...register("telephone")} aria-invalid={!!errors.telephone}/>{errors.telephone&&<small className="field-error">{errors.telephone.message}</small>}</label>
   <label className="form-field"><span>Service of interest <b>*</b></span><select defaultValue="" {...register("service")} aria-invalid={!!errors.service}><option value="" disabled>Select a service</option>{services.map(s=><option value={s.title} key={s.slug}>{s.title}</option>)}</select>{errors.service&&<small className="field-error">{errors.service.message}</small>}</label>
   <label className="form-field"><span>Project location <b>*</b></span><input placeholder="District, town or site" {...register("projectLocation")} aria-invalid={!!errors.projectLocation}/>{errors.projectLocation&&<small className="field-error">{errors.projectLocation.message}</small>}</label>
   <label className="form-field"><span>Subject <b>*</b></span><input placeholder="How can we help?" {...register("subject")} aria-invalid={!!errors.subject}/>{errors.subject&&<small className="field-error">{errors.subject.message}</small>}</label>
   <label className="form-field form-field-wide"><span>Message <b>*</b></span><textarea rows={5} placeholder="Briefly describe the project or support you need..." {...register("message")} aria-invalid={!!errors.message}/>{errors.message&&<small className="field-error">{errors.message.message}</small>}</label>
  </div>
  {status&&<p className={"form-status form-status-"+status.type} role="status">{status.message}</p>}
  <div className="form-submit-row"><p>Fields marked <b>*</b> are required.</p><button className="button button-primary" type="submit" disabled={isSubmitting}><span>{isSubmitting?"Sending inquiry":"Send inquiry"}</span>{isSubmitting?<LoaderCircle size={17} className="spin-icon"/>:<ArrowRight size={17}/>}</button></div>
 </form>;
}

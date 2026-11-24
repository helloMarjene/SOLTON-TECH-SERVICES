import {contactSchema} from "@/lib/validations";
export async function POST(request:Request){
 let payload:unknown;try{payload=await request.json();}catch{return Response.json({error:"Please submit a valid inquiry."},{status:400});}
 const parsed=contactSchema.safeParse(payload);
 if(!parsed.success)return Response.json({error:"Some inquiry fields are missing or invalid.",issues:parsed.error.flatten().fieldErrors},{status:400});
 const apiKey=process.env.RESEND_API_KEY,to=process.env.CONTACT_TO_EMAIL,from=process.env.CONTACT_FROM_EMAIL;
 if(!apiKey||!to||!from)return Response.json({error:"The inquiry form is not connected to email delivery yet. Please contact Solton by phone or email."},{status:503});
 const {fullName,email,telephone,service,projectLocation,subject,message}=parsed.data;
 try{
  const result=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+apiKey,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject:"Website inquiry: "+subject,text:["Name: "+fullName,"Email: "+email,"Telephone: "+telephone,"Service: "+service,"Project location: "+projectLocation,"",message].join("\n")}),cache:"no-store"});
  if(!result.ok)return Response.json({error:"We could not deliver your inquiry. Please contact Solton directly."},{status:502});
  return Response.json({ok:true});
 }catch{return Response.json({error:"We could not reach the email delivery service. Please contact Solton directly."},{status:502});}
}

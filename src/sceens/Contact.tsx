import { useForm, SubmitHandler } from "react-hook-form"; 
import emailjs from "@emailjs/browser"

type FormInputs ={
    subject: string,
    email: String,
    message: string
}

export const Contact = () => {

   const { register, handleSubmit, formState:{ errors }} = useForm<FormInputs>() 

   const onSubmit: SubmitHandler<FormInputs> = data => {
       emailjs.send(
        'service_zhlibst',
        'template_qh0189d',
        {
            subject: data.subject,
            email: data.email,
            message: data.message
        },
        'HeC44Oui0-WQJ3P7D'
       )
   }

    return (
        <main>
            <h3 className="font-extrabold text-5xl mb-4 App text-white" >Contacts</h3>

            <p className="text-2xl text-white">EMAIL: leuzcbs@gmail.com</p>
            <p className="text-2xl text-white">EMAIL: cbstechnologie27@gmail.com </p>
            <p className="text-2xl text-white">TEL: +221 77 150 47 36</p>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}> 
                <div className="mb-3">
                  <label className="items-center mr-3 text-2xl text-white" htmlFor="subject">Sujet du mail</label>
                  <br></br><input {...register("subject")} className="border text-2xl" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?"/><br></br>   
                </div>
               
                <div className="mb-3">
                  <label className="items-center mr-3 text-2xl text-white" htmlFor="email">Email</label>
                  <br></br><input {...register("email", {required: true})} className="border text-2xl" type="email" name="email" id="email" placeholder="Votre email"/>
                   {errors.email && <p className="text-[red] text-2xl">Email requis</p>}
                </div>
                
                <div className="mb-3">
                   <label className="items-center mr-3 text-2xl text-white" htmlFor="message">Message</label>
                   <br></br><textarea {...register("message")} rows={5} className="border resize-none text-2xl"  name="messabe" id="message" placeholder="Votre message"/> 
                </div>

                 <input type="submit" className="block bg-[black] text-[white] py-3 px-3 hover:bg-[gray]" />
            </form>
        </main>
    );
}
'use client';

import { Button } from '@/components/ui/button';

export default function ContactForm() {


    const sendWhatsAppMessage = (formData: FormData) => {
        const phoneNumber = '5533998744781';

        const name = formData.get('name');
        const message = formData.get('message');

        const encoded = encodeURIComponent(`Hi Marcelo, my name is ${name}.\n${message}`);
        const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
        window.open(url);
    }

    return (
        <form className="space-y-4" action={sendWhatsAppMessage}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" required />
            </div>
            {/* <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
            </div> */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded-md" required></textarea>
            </div>
            <Button type="submit">Send Message</Button>
        </form>
    )
}
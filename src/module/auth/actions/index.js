'use server'

import db from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';



export const onBoardUser = async () => {
    try {

        const user = await currentUser();
        console.log(user);

        if (!user) {
            return {
                success: false,
                error: 'No authenticated user'
            }
        }

        const { id, firstName, lastName, imageUrl, emailAddresses } = user;

        const newUser = await db.user.upsert({
            where: {
                clerkId: id,
            },

            update: {
                name: firstName && lastName
                    ? `${firstName} ${lastName}`
                    : firstName || lastName || null,
                image: imageUrl || null,
                email: emailAddresses[0]?.emailAddress || ''
            },

            create: {
                clerkId: id,
                name: firstName && lastName
                    ? `${firstName} ${lastName}`
                    : firstName || lastName || null,
                image: imageUrl || null,
                email: emailAddresses[0]?.emailAddress || ''
            }
        })

        return {
            success : true , 
            user : newUser , 
            message : "User onboarded successfully"
        }

    } catch (error) {
        console.log(error);
    }
}
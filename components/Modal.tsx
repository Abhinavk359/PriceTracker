"use client"
import {FormEvent, Fragment, useState} from 'react'
import { Description, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import Image from 'next/image'
import { AddUserEmailToProduct } from '@/lib/actions'
interface Props{
  productId:string;
}
const Modal = ({productId}:Props) => {
  let [isOpen, setIsOpen] = useState(true)  
  const [isSubmitting,setIsSubmitting]=useState(false);
  const [email,setEmail]=useState('');

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      await AddUserEmailToProduct(productId,email)
      setIsSubmitting(false);
      setEmail('');
      closeModal();
  }

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type="button" className='btn' onClick={openModal}>
        Track
      </button>
      <Transition appear show={isOpen}>
        <Dialog as='div' onClose={closeModal} className="dialog-container">
            <div className="fixed inset-0 flex w-screen items-center mx-auto justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
               <div className='dialog-content'>
                  <div className='flex flex-col'>
                     <div className='flex justify-between'>
                        <div className='p-3 border border-gray-200 rounded-10'>
                           <Image
                              src="/assets/icons/logo.svg"
                              alt="logo"
                              width={28}
                              height={28}
                           />
                        </div>
                        <Image
                          src="/assets/icons/x-close.svg"
                          alt='close'
                          height={28}
                          width={28}
                          className='cursor-pointer'
                          onClick={closeModal}
                        />
                     </div>
                     <h4 className='text-2xl text-secondary font-semibold mt-2'>
                       Stay updated with product pricing alerts right in your inbox!
                     </h4>
                     <p className='text-sm text-gray-600 mt-2'>
                       Never miss a bargain again with our timely alerts!
                     </p>
                     <form className='flex flex-col mt-5' onSubmit={handleSubmit}>
                       <label htmlFor="email" className='text-sm font-medium text-gray-700'>
                        E-mail address
                       </label>
                       <div className='dialog-input_container'>
                         <Image
                           src='/assets/icons/mail.svg'
                           alt="email"
                           width={28}
                           height={28}
                         />
                         <input 
                           required
                           type="email" 
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           placeholder='Enter your email address'
                           id="email"
                           className='dialog-input'
                         />
                       </div>
                       <button className='dialog-btn' type="submit">{isSubmitting?'Submitting...':'Track'}</button>
                     </form>
                  </div>
               </div>
            </DialogPanel>
            </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
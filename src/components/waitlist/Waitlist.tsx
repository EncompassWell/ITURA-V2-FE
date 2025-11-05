'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GradientInput } from "./GradientInput";

const Waitlist = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        community: "",
        email: ""
    });
    const [errors, setErrors] = useState({ email: '' });
    const [touched, setTouched] = useState({ community: false, email: false });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (showModal) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, [showModal]);

    const validateEmail = (email: string) => {
      return /^\S+@\S+\.\S+$/.test(email);
    };

    const isFormComplete = formData.community.trim() !== '' &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormComplete) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowModal(true);
        }, 1200); // simulate loading
    };

    const handleInputChange = (id: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        setTouched((t) => ({...t, [id]: true}));
        if (id === 'email') {
            setErrors((e) => ({
                ...e,
                email: value && !validateEmail(value)
                    ? 'Please enter a valid email address.'
                    : ''
            }));
        }
    };

    const handleBlur = (id: string) => {
        setTouched((t) => ({ ...t, [id]: true }));
        if (id === 'email' && formData.email && !validateEmail(formData.email)) {
            setErrors((e) => ({
                ...e,
                email: 'Please enter a valid email address.'
            }));
        }
    };
    return (
        <div className=" w-full min-h-screen  bg-[#080514] px-3 md:pt-8 ">
            <div
                className="lg:w-[600px] md:w-[400px] w-full lg:h-[400px] md:h-[500px] h-[200px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-0"
                style={{
                    backgroundImage: "url('/Gradient.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    filter: 'blur(114px)'
                }}
            ></div>
            <div className="flex flex-col justify-between min-h-screen">

                <div className="flex flex-col  lg:gap-10 justify-center items-center w-full relative z-10">
                    <div className="">
                        <div className=" flex items-center  justify-center px-4 py-2 rounded-full ">
                            <Link href="/">
                                <Image
                                    src="/logo.svg"
                                    alt="Itura's logo"
                                    width={50}
                                    height={50}
                                    className=" w-5/6 md:w-[100%] mx-auto"
                                />
                            </Link>

                        </div>

                    </div>
                    <div className="flex flex-col gap-10 mt-[-20px] sm:mt-0">
                        <div className="text-center flex flex-col gap-[2px] md:gap-4">
                            <h1 className=" text-[20px] md:text-3xl lg:text-5xl text-center font-inter   font-semibold tracking-[-0.02em] text-transparent bg-clip-text"
                                style={{
                                    background: "linear-gradient(180deg, #F5F4F7 0%, #F3F2F5 55%, #B0ADBF 100%)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                                }}>
                                Early Access
                            </h1>
                            <p className="text-[#A39EB6] text-xs sm:text-sm md:text-base font-inter font-normal">
                                Be Part of Itura’s Early Experience
                            </p>

                        </div>
                        <div className=" font-normal text-sm leading-7 md:text-lg flex text-center flex-col gap-10 md:gap-6">
                            <p className="text-sm"> Stressed from endless scrolls and creative blocks? <br />
                                Itura is your secret chill spot 😌</p>
                            <p className="text-sm">Guided meditations, Astrological Insights, Oracle readings + chats with Creative Pros.<br />
                                A feel-good flow for your mind, body, and spark.</p>
                            <p className="text-sm">Join our beta squad (spots filling fast!) to shape easy wellness.<br />
                                <span className="text-xs sm:text-sm text-[#F3C4B4] italic ">
                                    p.s. First peek at our weekly colour mood magic + journal sharing!
                                </span>
                            </p>
                        </div>

                    </div>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 justify-center mt-8 items-center">
                        <div className=" flex flex-col md:flex-row gap-4 w-full">
                            <div className="space-y-2">
                                <label htmlFor="community" className="text-sm font-medium text-white/70">
                                    Your Community
                                </label>
                                <GradientInput
                                    id="community"
                                    type="text"
                                    placeholder="Enter your community"
                                    value={formData.community}
                                    onChange={(e) => handleInputChange("community", e.target.value)}
                                    onBlur={() => handleBlur('community')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/70">
                                    Email
                                </label>
                                <GradientInput
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    onBlur={() => handleBlur('email')}
                                />
                                {/* Inline email error */}
                                {touched.email && errors.email && (
                                    <div className="text-xs text-red-400 pt-1">{errors.email}</div>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="p-3 bg-gradient-to-l from-orange to-lightOrange text-sm border-[0.86px] border-white/20 rounded-xl text-white px-10 py-[14px] hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                                disabled={!isFormComplete || loading}
                            >
                                {loading ? 'Please wait...' : 'Grab my Spot'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer Section */}

                <section className="pt-24">

                    <footer className="w-full  ">
                        <div className="p-[0.5px] rounded-[32px]" style={{ background: "linear-gradient(180deg, #B9A7C3 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
                            <div className="bg-[#080514] rounded-[32px] px-2 md:px-6 py-[100px]">
                                <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
                                    <p className="text-center text-xs sm:text-left">
                                        © 2025 EncompassWell  <span className="text-[#FFE1BE] ml-1 italic text-xs">We hate spam. Your e-mail is safe.</span>
                                    </p>
                                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                        Privacy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>

            </div>

            {/* Success Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative w-full max-w-[1042px] mx-2 md:mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="p-[2px] rounded-[32px] h-[260px] md:h-[430px]"
                            style={{
                                background: 'radial-gradient(ellipse 150% 70% at top left, #CCA1FF33 0%, #ffffff1A 100%)',
                            }}
                        >
                            <div
                                className="h-full w-full rounded-[32px] flex items-center justify-center p-2 md:p-6"
                                style={{
                                    background: "rgba(11, 8, 21, 0.7)",
                                    backdropFilter: "blur(20px)",
                                    WebkitBackdropFilter: "blur(20px)",
                                }}
                            >
                                <div className="p-[1px] rounded-[32px] w-full h-full mx-auto"
                                    style={{
                                        background: 'radial-gradient(ellipse 120% 60% at top left, #CCA1FF33 0%, #ffffff1A 100%)',
                                    }}
                                >
                                    <div className="bg-[#0B0815D1] bg-opacity-80 rounded-[32px]  md:px-[100px] md:py-20 flex flex-col items-center justify-center w-full h-full">
                                        <h2 className="text-3xl font-inter font-bold md:text-5xl lg:text-[64px] md:font-medium text-white text-center">
                                            You're In!
                                        </h2>
                                        <p className="text-white text-base md:text-lg lg:text-[28px] text-center mt-4">
                                            Check your email for a free mood tip.
                                        </p>
                                        <div className="mt-8">
                                            <Link
                                                href="/"
                                                className="inline-block px-14 md:px-8 py-3 rounded-xl text-white font-medium text-sm md:text-base bg-gradient-to-l from-orange to-lightOrange hover:opacity-90 transition-opacity"
                                            >
                                                Learn More About Itura
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Waitlist;

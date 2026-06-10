"use client";

import React, { useState, useRef, useEffect } from "react";
import CloudIcon from "../../components/icons/CloudIcon.jsx";
import { ChevronDown, ChevronUp } from "lucide-react";

const Form = ({ formRef }) => {
    // State for all form fields
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [purpose, setPurpose] = useState("");
    const [projectDetails, setProjectDetails] = useState("");
    const [timeline, setTimeline] = useState("");
    const [budget, setBudget] = useState("");
    const [communication, setCommunication] = useState("");
    const [files, setFiles] = useState("");

    // Validation state
    const [validationStep, setValidationStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    
    // New: Validation error messages state
    const [validationErrors, setValidationErrors] = useState({});

    // Dropdown states
    const [openPurpose, setOpenPurpose] = useState(false);
    const [openCommunication, setOpenCommunication] = useState(false);
    
    // Country code state
    const [countryCode, setCountryCode] = useState("+91");
    const [openCountryCode, setOpenCountryCode] = useState(false);

    // Refs for dropdowns to handle outside clicks
    const purposeDropdownRef = useRef(null);
    const communicationDropdownRef = useRef(null);
    const countryCodeDropdownRef = useRef(null);

    // Dropdown options
    const purposeOptions = [
        "Project Requirement",
        "AI Integration Inquiry",
        "Partnership / Strategic Alliance",
        "Custom Software Development",
        "Consultation / Advisory",
        "Other (Specify)"
    ];

    const communicationOptions = [
        "Email",
        "Phone",
        "Video Call",
        "WhatsApp",
        "SMS",
        "In-app messages"
    ];

    // Country codes array
    const countryCodes = [
        { code: "+91", flag: "🇮🇳", digits: 10 },
        { code: "+1", flag: "🇺🇸", digits: 10 },
        { code: "+44", flag: "🇬🇧", digits: 10 },
        { code: "+61", flag: "🇦🇺", digits: 9 },
        { code: "+49", flag: "🇩🇪", digits: 10 },
        { code: "+33", flag: "🇫🇷", digits: 9 },
        { code: "+81", flag: "🇯🇵", digits: 10 },
        { code: "+86", flag: "🇨🇳", digits: 11 },
        { code: "+971", flag: "🇦🇪", digits: 9 },
        { code: "+65", flag: "🇸🇬", digits: 8 },
    ];

    // Helper functions
    const getCurrentCountryDigits = () => {
        const country = countryCodes.find(c => c.code === countryCode);
        return country ? country.digits : 10;
    };

    const getCurrentCountryFlag = () => {
        const country = countryCodes.find(c => c.code === countryCode);
        return country ? country.flag : "🇮🇳";
    };

    // Handle country code change
    const handleCountryCodeChange = (code) => {
        setCountryCode(code);
        // Clear phone validation error when country changes
        if (validationErrors.phone) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.phone;
                return newErrors;
            });
        }
    };

    // Handle phone change
    const handlePhoneChange = (value) => {
        // Only allow numbers
        const processedValue = value.replace(/\D/g, '');
        // Limit to maximum digits based on country
        const maxDigits = getCurrentCountryDigits();
        const limitedValue = processedValue.slice(0, maxDigits);
        setPhone(limitedValue);

        // Clear validation error when user starts typing
        if (validationErrors.phone) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.phone;
                return newErrors;
            });
        }

        // Validation progression logic
        if (submitted) {
            const currentErrorField = getCurrentErrorField();
            if (currentErrorField === 'phone' && limitedValue.trim() !== "") {
                const nextStep = validationStep + 1;
                setValidationStep(nextStep);
            }
        }
    };

    // Handle outside clicks to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (purposeDropdownRef.current && !purposeDropdownRef.current.contains(event.target)) {
                setOpenPurpose(false);
            }
            if (communicationDropdownRef.current && !communicationDropdownRef.current.contains(event.target)) {
                setOpenCommunication(false);
            }
            if (countryCodeDropdownRef.current && !countryCodeDropdownRef.current.contains(event.target)) {
                setOpenCountryCode(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Required fields in validation order
    const requiredFields = [
        { key: 'fullName', label: 'Full Name', value: fullName },
        { key: 'email', label: 'Email Address', value: email },
        { key: 'phone', label: 'Phone Number', value: phone },
        { key: 'company', label: 'Company Name', value: company },
        { key: 'designation', label: 'Designation / Role', value: designation },
        { key: 'purpose', label: 'Purpose of Collaboration', value: purpose },
        { key: 'projectDetails', label: 'Project / Requirement Details', value: projectDetails },
        { key: 'timeline', label: 'Expected Timeline', value: timeline },
        { key: 'communication', label: 'Preferred Mode of Communication', value: communication },
        { key: 'files', label: 'Attach Files / Documents', value: files }
    ];

    // Validation functions
    const validateFullName = (name) => {
        // Only alphabets and spaces allowed
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name.trim())) {
            return "Only alphabets are allowed";
        }
        return "";
    };

    const validateEmail = (email) => {
        // Must end with @gmail.com
        if (!email.endsWith('@gmail.com')) {
            return "Not a valid email format";
        }
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Not a valid email format";
        }
        return "";
    };

    const validatePhone = (phone) => {
        // Only numbers allowed
        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phone)) {
            return "Only numbers are allowed";
        }
        
        // Get required digits for selected country
        const requiredDigits = getCurrentCountryDigits();
        
        // Check digit length
        if (phone.length !== requiredDigits) {
            return `Phone number must be exactly ${requiredDigits} digits`;
        }
        
        // Additional country-specific validations
        if (countryCode === "+91" && !phone.startsWith("6") && !phone.startsWith("7") && !phone.startsWith("8") && !phone.startsWith("9")) {
            return "Indian mobile numbers must start with 6, 7, 8, or 9";
        }

        if (countryCode === "+1" && (phone.length !== 10 || phone.startsWith("0") || phone.startsWith("1"))) {
            return "US numbers cannot start with 0 or 1 and must be 10 digits";
        }

        return "";
    };

    const getCurrentErrorField = () => {
        if (!submitted) return null;

        for (let i = 0; i <= validationStep; i++) {
            const field = requiredFields[i];
            if (field.value.trim() === "") {
                return field.key;
            }
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setValidationErrors({});

        // Find the first empty required field
        const firstEmptyFieldIndex = requiredFields.findIndex(field => {
            // Skip validation for optional fields (budget and files)
            if (field.key === 'files' || field.key === 'budget') {
                return false;
            }
            return field.value.trim() === "";
        });

        if (firstEmptyFieldIndex !== -1) {
            // Set validation step to the first empty field
            setValidationStep(firstEmptyFieldIndex);
            console.log(`Please fill ${requiredFields[firstEmptyFieldIndex].label}`);
            return;
        }

        // Validate individual fields
        const errors = {};
        
        // Full Name validation
        const fullNameError = validateFullName(fullName);
        if (fullNameError) {
            errors.fullName = fullNameError;
        }
        
        // Email validation
        const emailError = validateEmail(email);
        if (emailError) {
            errors.email = emailError;
        }
        
        // Phone validation
        const phoneError = validatePhone(phone);
        if (phoneError) {
            errors.phone = phoneError;
        }
        
        // If there are validation errors, don't submit
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            console.log("Validation errors:", errors);
            return;
        }

        // Prepare form data with country code
        const formData = {
            fullName,
            email,
            phone: `${countryCode} ${phone}`,
            company,
            designation,
            purpose,
            projectDetails,
            timeline,
            budget: budget || '', // optional
            communication,
            files: files || '', // optional
            submittedAt: new Date().toISOString()
        };

        try {
            // Your Google Apps Script URL
            const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwHNKif9-L2m1JKnfZnAEC0djm1Fs9zHFd7l7PV38gfioeRACyh-W8JgeVQghtrsV9BRA/exec';

            // Note: Using mode: 'no-cors' might be needed for Google Apps Script
            const response = await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Note: With 'no-cors', you can't read the response
            console.log("Form submitted successfully to Google Sheet!");

            // Show success message
            alert("Form submitted successfully!");

            // Reset form
            setFullName("");
            setEmail("");
            setPhone("");
            setCompany("");
            setDesignation("");
            setPurpose("");
            setProjectDetails("");
            setTimeline("");
            setBudget("");
            setCommunication("");
            setFiles("");
            setSubmitted(false);
            setValidationStep(0);
            setValidationErrors({});
            setCountryCode("+91"); // Reset to default country code

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    // Handle input changes with validation progression
    const handleInputChange = (setter, fieldKey, value) => {
        // Apply input restrictions based on field type
        let processedValue = value;
        
        if (fieldKey === 'fullName') {
            // Only allow alphabets and spaces
            processedValue = value.replace(/[^A-Za-z\s]/g, '');
        } 
        
        setter(processedValue);
        
        // Clear validation error for this field when user starts typing
        if (validationErrors[fieldKey] && fieldKey !== 'email') {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[fieldKey];
                return newErrors;
            });
        }

        if (submitted) {
            const currentErrorField = getCurrentErrorField();
            if (currentErrorField === fieldKey && processedValue.trim() !== "") {
                // Move to next validation step when current error field is filled
                const nextStep = validationStep + 1;
                setValidationStep(nextStep);
            }
        }
    };

    // Handle dropdown selection with validation progression
    const handleDropdownChange = (setter, fieldKey, value) => {
        setter(value);

        if (submitted) {
            const currentErrorField = getCurrentErrorField();
            if (currentErrorField === fieldKey && value.trim() !== "") {
                // Move to next validation step when current error field is filled
                const nextStep = validationStep + 1;
                setValidationStep(nextStep);
            }
        }
    };

    // Individual validation conditions
    const isFieldEmpty = (fieldKey) => {
        if (!submitted) return false;

        const currentErrorField = getCurrentErrorField();
        return currentErrorField === fieldKey;
    };

    // Check if field has validation error
    const hasValidationError = (fieldKey) => {
        return validationErrors[fieldKey] !== undefined;
    };

    // Helper function to determine text color based on whether field has value
    const getTextColor = (value, isEmptyCondition, hasError) => {
        if (hasError) return "#F47458";
        if (isEmptyCondition) return "#F47458";
        return value ? "#42617E" : "#869EB6";
    };

    const inputClassName = (isEmptyCondition, value, hasError) => `
        w-full font-avenir font-semibold text-[14px] leading-[100%] tracking-[5%]
        px-4 py-3 outline-none rounded-2xl
        placeholder:font-avenir placeholder:font-semibold placeholder:text-[14px]
        placeholder:leading-[100%] placeholder:tracking-[5%] placeholder:text-[#869EB6]
        transition-all duration-200 ease-in-out
        ${hasError || isEmptyCondition
            ? "border border-[#F47458] text-[#F47458] bg-white"
            : "border border-[#E3E8EE] text-[#42617E] bg-[#E3E8EE] focus:border-[#869EB6] focus:bg-white"
        }
    `;

    const textareaClassName = (isEmptyCondition, value, hasError) => `
        w-full h-[120px] resize-none
        font-avenir font-semibold text-[14px] leading-[100%] tracking-[5%]
        px-4 py-3 outline-none rounded-2xl
        placeholder:font-avenir placeholder:font-semibold placeholder:text-[14px] 
        placeholder:leading-[100%] placeholder:tracking-[5%] placeholder:text-[#869EB6]
        transition-all duration-200 ease-in-out
        ${hasError || isEmptyCondition
            ? "border border-[#F47458] text-[#F47458] bg-white"
            : "border border-[#E3E8EE] text-[#42617E] bg-[#E3E8EE] focus:border-[#869EB6] focus:bg-white"
        }
    `;

    const dropdownClassName = (isEmptyCondition, isOpen, value, hasError) => `
        w-full font-avenir font-semibold text-[14px] leading-[100%] tracking-[5%]
        px-4 py-3 outline-none rounded-2xl
        border transition-all duration-200 ease-in-out
        cursor-pointer flex items-center justify-between
        ${hasError || isEmptyCondition
            ? "border border-[#F47458] text-[#F47458] bg-white"
            : isOpen
                ? "border border-[#869EB6] text-[#42617E] bg-white"
                : "border border-[#E3E8EE] text-[#42617E] bg-[#E3E8EE] hover:bg-[#E3E8EE]"
        }
    `;

    return (
        <div ref={formRef}
            className="mt-8 lg:mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-20">

            <h5 className="pb-5 font-kollektif font-bold text-[28px] lg:text-[32px] leading-[100%] tracking-[7%] text-[#121212] text-center mb-4">
                Get in Touch
            </h5>

            <div className="bg-[#F8F8F8] shadow-[0_0_15px_0_#00000040] p-6 lg:p-8 rounded-2xl">

                <div className="mb-6 lg:mb-8">
                    <h5 className="font-avenir font-bold text-[14px] lg:text-[16px] leading-[140%] lg:leading-[25px] tracking-[4%] text-center capitalize text-[#5B7C99] px-2">
                        Share your project details and let's start collaborating
                    </h5>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Row - Full Name & Email */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Full Name *
                            </h5>
                            <input
                                type="text"
                                placeholder="Eg., Rayna Lipshutz"
                                value={fullName}
                                onChange={(e) => handleInputChange(setFullName, 'fullName', e.target.value)}
                                className={inputClassName(isFieldEmpty('fullName'), fullName, hasValidationError('fullName'))}
                                style={{ color: getTextColor(fullName, isFieldEmpty('fullName'), hasValidationError('fullName')) }}
                            />
                            {isFieldEmpty('fullName') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Full Name is required
                                </p>
                            )}
                            {validationErrors.fullName && !isFieldEmpty('fullName') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    {validationErrors.fullName}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Email Address *
                            </h5>
                            <input
                                type="email"
                                placeholder="Eg., rayna@gmail.com"
                                value={email}
                                onChange={(e) => handleInputChange(setEmail, 'email', e.target.value)}
                                className={inputClassName(isFieldEmpty('email'), email, hasValidationError('email'))}
                                style={{ color: getTextColor(email, isFieldEmpty('email'), hasValidationError('email')) }}
                            />
                            {isFieldEmpty('email') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Email Address is required
                                </p>
                            )}
                            {validationErrors.email && !isFieldEmpty('email') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    {validationErrors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Second Row - Phone & Company */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Phone Number *
                            </h5>

                            <div className="relative">
                                {/* Input + Dropdown wrapper */}
                                <div className="flex flex-col md:flex-row w-full gap-3 md:gap-0">
                                    {/* Country Code Dropdown */}
                                    <div
                                        className="relative md:flex-shrink-0 w-full md:w-auto"
                                        ref={countryCodeDropdownRef}
                                    >
                                        <div
                                            className={`
                                                flex items-center px-3 py-3 cursor-pointer 
                                                font-avenir font-semibold text-[14px] leading-[100%] tracking-[5%]
                                                transition-all duration-200 ease-in-out h-[44px]
                                                rounded-2xl md:rounded-l-2xl md:rounded-r-none
                                                text-[#869EB6]
                                                justify-between md:justify-start 
                                                gap-2
                                                ${isFieldEmpty('phone') || hasValidationError('phone')
                                                    ? "border border-[#F47458] bg-white text-[#F47458]"
                                                    : openCountryCode
                                                        ? "border border-[#869EB6] bg-white text-[#42617E]"
                                                        : "border border-[#E3E8EE] bg-[#E3E8EE] text-[#42617E] hover:bg-[#E3E8EE]"
                                                }
                                            `}
                                            onClick={() => setOpenCountryCode(!openCountryCode)}
                                        >
                                            {/* Left Section */}
                                            <div className="flex items-center gap-2">
                                                <span>{getCurrentCountryFlag()}</span>
                                                <span className="font-avenir text-[14px] tracking-[5%] text-[#869EB6]">
                                                    {countryCode}
                                                </span>
                                            </div>

                                            {/* Right Section → Chevron */}
                                            {openCountryCode ? (
                                                <ChevronUp size={16} className="text-[#869EB6] flex-shrink-0" />
                                            ) : (
                                                <ChevronDown size={16} className="text-[#869EB6] flex-shrink-0" />
                                            )}
                                        </div>

                                        {/* Country Code Dropdown Panel */}
                                        {openCountryCode && (
                                            <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl border border-[#869EB6] shadow-lg z-20 w-full">
                                                <ul className="py-2 max-h-[300px] overflow-y-auto scroll-hidden">
                                                    {countryCodes.map((country, index) => (
                                                        <li
                                                            key={index}
                                                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer font-avenir text-[14px] tracking-[5%] text-black transition-colors duration-200 flex items-center gap-3"
                                                            onClick={() => {
                                                                handleCountryCodeChange(country.code);
                                                                setOpenCountryCode(false);
                                                            }}
                                                        >
                                                            <span className="text-[18px] text-[#869EB6]">{country.flag}</span>
                                                            <span className="text-[#869EB6]">{country.code}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Phone Number Input */}
                                    <input
                                        type="tel"
                                        placeholder={`Enter ${getCurrentCountryDigits()}-digit number`}
                                        value={phone}
                                        onChange={(e) => handlePhoneChange(e.target.value)}
                                        className={`
                                            flex-1 font-avenir font-semibold text-[14px] leading-[100%] tracking-[5%]
                                            px-4 py-3 outline-none h-[44px]
                                            rounded-2xl md:rounded-r-2xl md:rounded-l-none
                                            placeholder:font-avenir placeholder:font-semibold placeholder:text-[14px]
                                            placeholder:leading-[100%] placeholder:tracking-[5%] placeholder:text-[#869EB6]
                                            transition-all duration-200 ease-in-out
                                            ${isFieldEmpty('phone') || hasValidationError('phone')
                                                ? "border border-[#F47458] text-[#F47458] bg-white"
                                                : "border border-[#E3E8EE] text-[#42617E] bg-[#E3E8EE] focus:border-[#869EB6] focus:bg-white"
                                            }
                                        `}
                                        style={{
                                            color: getTextColor(
                                                phone,
                                                isFieldEmpty('phone'),
                                                hasValidationError('phone')
                                            )
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Error Messages */}
                            {isFieldEmpty('phone') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Phone Number is required
                                </p>
                            )}
                            {validationErrors.phone && !isFieldEmpty('phone') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    {validationErrors.phone}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Company Name
                            </h5>
                            <input
                                type="text"
                                placeholder="Vibexio"
                                value={company}
                                onChange={(e) => handleInputChange(setCompany, 'company', e.target.value)}
                                className={inputClassName(isFieldEmpty('company'), company, false)}
                                style={{ color: getTextColor(company, isFieldEmpty('company'), false) }}
                            />
                            {isFieldEmpty('company') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Company Name is required
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Third Row - Designation & Purpose */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Designation / Role
                            </h5>
                            <input
                                type="text"
                                placeholder="Project Manager"
                                value={designation}
                                onChange={(e) => handleInputChange(setDesignation, 'designation', e.target.value)}
                                className={inputClassName(isFieldEmpty('designation'), designation, false)}
                                style={{ color: getTextColor(designation, isFieldEmpty('designation'), false) }}
                            />
                            {isFieldEmpty('designation') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Designation is required
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 w-full" ref={purposeDropdownRef}>
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Purpose of Collaboration
                            </h5>
                            <div className="relative">
                                <div
                                    className={dropdownClassName(isFieldEmpty('purpose'), openPurpose, purpose, false)}
                                    onClick={() => setOpenPurpose(!openPurpose)}
                                >
                                    <span style={{ color: getTextColor(purpose, isFieldEmpty('purpose'), false) }} className="font-avenir text-[14px] tracking-[5%]">
                                        {purpose || "Select a Purpose"}
                                    </span>
                                    {openPurpose ? (
                                        <ChevronUp size={18} className="text-[#869EB6] flex-shrink-0" />
                                    ) : (
                                        <ChevronDown size={18} className="text-[#869EB6] flex-shrink-0" />
                                    )}
                                </div>

                                {/* Dropdown Panel - No Scroll */}
                                {openPurpose && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl border border-[#869EB6] shadow-lg z-20">
                                        <ul className="py-2">
                                            {purposeOptions.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer font-avenir text-[14px] tracking-[5%] text-black transition-colors duration-200"
                                                    onClick={() => {
                                                        handleDropdownChange(setPurpose, 'purpose', item);
                                                        setOpenPurpose(false);
                                                    }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {isFieldEmpty('purpose') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Purpose of Collaboration is required
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-2">
                        <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                            Project / Requirement Details
                        </h5>
                        <textarea
                            placeholder="Brief description of your project or requirements"
                            value={projectDetails}
                            onChange={(e) => handleInputChange(setProjectDetails, 'projectDetails', e.target.value)}
                            className={textareaClassName(isFieldEmpty('projectDetails'), projectDetails, false)}
                            style={{ color: getTextColor(projectDetails, isFieldEmpty('projectDetails'), false) }}
                        />
                        {isFieldEmpty('projectDetails') && (
                            <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                Project Details are required
                            </p>
                        )}
                    </div>

                    {/* Fourth Row - Timeline & Budget */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Expected Timeline
                            </h5>
                            <input
                                type="text"
                                placeholder="e.g., 3-6 months"
                                value={timeline}
                                onChange={(e) => handleInputChange(setTimeline, 'timeline', e.target.value)}
                                className={inputClassName(isFieldEmpty('timeline'), timeline, false)}
                                style={{ color: getTextColor(timeline, isFieldEmpty('timeline'), false) }}
                            />
                            {isFieldEmpty('timeline') && (
                                <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                    Expected Timeline is required
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                                Budget Range (Optional)
                            </h5>
                            <input
                                type="text"
                                placeholder="e.g., $10k-$50k"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className={inputClassName(false, budget, false)}
                                style={{ color: getTextColor(budget, false, false) }}
                            />
                            {/* No validation error shown for optional field */}
                        </div>
                    </div>

                    {/* Communication */}
                    <div className="flex flex-col gap-2" ref={communicationDropdownRef}>
                        <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                            Preferred Mode of Communication
                        </h5>
                        <div className="relative">
                            <div
                                className={dropdownClassName(isFieldEmpty('communication'), openCommunication, communication, false)}
                                onClick={() => setOpenCommunication(!openCommunication)}
                            >
                                <span style={{ color: getTextColor(communication, isFieldEmpty('communication'), false) }} className="font-avenir text-[14px] tracking-[5%]">
                                    {communication || "Select preferred communication method"}
                                </span>
                                {openCommunication ? (
                                    <ChevronUp size={18} className="text-[#869EB6] flex-shrink-0" />
                                ) : (
                                    <ChevronDown size={18} className="text-[#869EB6] flex-shrink-0" />
                                )}
                            </div>

                            {/* Dropdown Panel - No Scroll */}
                            {openCommunication && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl border border-[#869EB6] shadow-lg z-20">
                                    <ul className="py-2">
                                        {communicationOptions.map((item, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-3 hover:bg-gray-50 cursor-pointer font-avenir text-[14px] tracking-[5%] text-black transition-colors duration-200"
                                                onClick={() => {
                                                    handleDropdownChange(setCommunication, 'communication', item);
                                                    setOpenCommunication(false);
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {isFieldEmpty('communication') && (
                            <p className="text-[#F47458] text-[12px] font-avenir pl-2">
                                Preferred Mode of Communication is required
                            </p>
                        )}
                    </div>

                    {/* File Upload Section */}
                    <div className="flex flex-col gap-2 mt-6 lg:mt-10">
                        <h5 className="font-avenir font-semibold text-[14px] lg:text-[16px] leading-[100%] tracking-[5%] text-black">
                            Attach Files / Documents (If Any)
                        </h5>

                        <div className="relative w-full h-[100px] lg:h-[120px]">
                            {/* REAL HIDDEN FILE INPUT */}
                            <input
                                type="file"
                                id="fileInput"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    // Max size 5MB
                                    if (file.size > 5 * 1024 * 1024) {
                                        alert("File size must be less than 5MB");
                                        return;
                                    }

                                    setFiles(file.name);
                                    // No validation progression needed since it's optional
                                }}
                            />

                            {/* CLICKABLE UPLOAD BOX */}
                            <div
                                onClick={() => document.getElementById("fileInput").click()}
                                className={`
                                    absolute inset-0 flex flex-col items-center justify-center
                                    cursor-pointer rounded-2xl px-4 text-center
                                    transition-all duration-200 ease-in-out
                                    border-2 border-dashed border-[#869EB6] bg-[#E3E8EE] hover:bg-[#D8E1EB]
                                `}
                            >
                                {/* SHOW FILE NAME IF SELECTED */}
                                {files ? (
                                    <p className="font-avenir text-[14px] lg:text-[16px] tracking-[5%] text-[#42617E]">
                                        {files}
                                    </p>
                                ) : (
                                    <>
                                        <div className="mb-1 lg:mb-2">
                                            <CloudIcon />
                                        </div>
                                        <p className="font-avenir tracking-[5%] leading-[100%] text-[#000000] text-[14px] lg:text-[16px] font-normal">
                                            Choose File
                                        </p>
                                        <p className="mt-1 font-avenir tracking-[5%] text-[#000000] text-[11px] lg:text-[12px] font-[350] italic">
                                            PDF, DOC, or DOCX (Max 5MB)
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* No validation error shown for optional field */}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center w-full pt-4">
                        <button
                            type="submit"
                            className="bg-[#60809C] w-full lg:w-[190px] h-[44px] rounded-[10px] font-avenir font-bold text-[16px] leading-[25px] tracking-[4%] text-center capitalize text-[#F7F7F9] hover:bg-[#42617E] transition-all duration-200 hover:cursor-pointer"
                        >
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
'use client'
// import {supabase} from "@app/data/supabaseClient";
import {useState} from 'react';

function FormField({
                       label,
                       id,
                       type,
                       required,
                       placeholder,
                       value,
                       onChange,
                       error
                   }: {
    label: string,
    id: string,
    type: string,
    required?: boolean,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-sm text-stone-400">{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                required={required}
                placeholder={placeholder}
                className="rounded-md border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-neutral-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-700"
                value={value}
                onChange={onChange}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
}

const FlightSelect = ({
                          value,
                          onChange
                      }: {
    value?: string,
    onChange?: (v: string) => void
}) => {
    return (
        <select
            id="flight"
            name="flight"
            className="rounded-md border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-neutral-100"
            value={value}
            onChange={e => onChange?.(e.target.value)}
        >
            <option value="" disabled>Select your flight</option>
            <option value="none">No flight needed, I will come by myself.</option>
            {/* Les <optgroup> sont conservés tels quels */}
        </select>
    );
};

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    job: string;
    flight: string;
    notes: string;
    consent: boolean;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

export default function RegisterForm() {
    //const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<string | null>(null);
    const [summary, setSummary] = useState<FormState | null>(null);
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        job: '',
        flight: '',
        notes: '',
        consent: false
    });
    const [errors, setErrors] = useState<ErrorState>({});

    const validate = () => {
        const errs: ErrorState = {};
        if (!form.firstName) errs.firstName = 'First name is required';
        if (!form.lastName) errs.lastName = 'Last name is required';
        if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required';
        if (!form.phone) errs.phone = 'Phone is required';
        if (!form.company) errs.company = 'Company is required';
        if (!form.job) errs.job = 'Job title is required';
        if (!form.flight) errs.flight = 'Flight selection required';
        if (!form.consent) errs.consent = 'Consent required';
        return errs;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : value
        }));
    };

    const handleFlightChange = (value: string) => {
        setForm(prev => ({...prev, flight: value}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setToast(null);
        setSummary(null);
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;
        setLoading(true);

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        });

        setLoading(false);
        if (!res.ok) {
            setToast('Registration failed. Please try again.');
            return;
        }

        setToast('Registration successful!');
        setSummary(form);
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            job: '',
            flight: '',
            notes: '',
            consent: false
        });
    };


    return (
        <form className="w-full max-w-2xl mx-auto space-y-8" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
                <FormField label="First name" id="firstName" type="text" required placeholder="John"
                           value={form.firstName} onChange={handleChange} error={errors.firstName}/>
                <FormField label="Last name" id="lastName" type="text" required placeholder="Appleseed"
                           value={form.lastName} onChange={handleChange} error={errors.lastName}/>
                <FormField label="Email address" id="email" type="email" required placeholder="you@example.com"
                           value={form.email} onChange={handleChange} error={errors.email}/>
                <FormField label="Phone number" id="phone" type="tel" required placeholder="+33 6 12 34 56 78"
                           value={form.phone} onChange={handleChange} error={errors.phone}/>
                <FormField label="Company / Organization" id="company" type="text" required placeholder="Apple France"
                           value={form.company} onChange={handleChange} error={errors.company}/>
                <FormField label="Job title" id="job" type="text" required placeholder="Creative Director"
                           value={form.job} onChange={handleChange} error={errors.job}/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="slot" className="text-sm text-stone-400">
                    Select your preferred flight to come.
                </label>
                <FlightSelect value={form.flight} onChange={handleFlightChange}/>
                {errors.flight && <span className="text-red-500 text-xs">{errors.flight}</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="notes" className="text-sm text-stone-400">
                    Special requests (accessibility, dietary, other)
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Let us know if there's anything we should be aware of"
                    className="rounded-md border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-neutral-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-700"
                    value={form.notes}
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-start gap-2">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 accent-blue-700"
                    checked={form.consent}
                    onChange={handleChange}
                />
                <label htmlFor="consent" className="text-sm text-stone-400">
                    I agree to the processing of my data in accordance with our <a href="/privacy"
                                                                                   className="underline hover:text-white">privacy
                    policy</a>.
                </label>
                {errors.consent && <span className="text-red-500 text-xs">{errors.consent}</span>}
            </div>
            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={loading}
            >
                {loading ? 'Submitting...' : 'Submit registration'}
            </button>
            {toast && (
                <div
                    className="fixed bottom-6 right-6 bg-stone-900 border border-blue-700 px-6 py-4 rounded shadow-lg z-50 text-green-400">
                    {toast}
                </div>
            )}
            {summary && (
                <div className="mt-6 p-4 bg-stone-800 rounded text-white">
                    <h3 className="font-bold mb-2">Registration Summary</h3>
                    <ul className="text-sm">
                        <li><b>Name:</b> {summary.firstName} {summary.lastName}</li>
                        <li><b>Email:</b> {summary.email}</li>
                        <li><b>Phone:</b> {summary.phone}</li>
                        <li><b>Company:</b> {summary.company}</li>
                        <li><b>Job:</b> {summary.job}</li>
                        <li><b>Flight:</b> {summary.flight}</li>
                        <li><b>Notes:</b> {summary.notes}</li>
                    </ul>
                </div>
            )}
        </form>
    );
}

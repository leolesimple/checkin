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
            <optgroup label="France">
              <option value="DL8500">DL8500, CDG‑SFO, 12h30</option>
              <option value="DL8501">DL8501, CDG‑SFO, 14h00</option>
              <option value="AF8802">AF8802, CDG‑SFO, 16h45</option>
              <option value="AF8803">AF8803, CDG‑SFO, 19h10</option>
              <option value="AF8804">AF8804, CDG‑SFO, 21h00</option>
            </optgroup>
            <optgroup label="Germany">
              <option value="LH9001">LH9001, FRA‑SFO, 10h00</option>
              <option value="LH9002">LH9002, FRA‑SFO, 12h30</option>
              <option value="LH9003">LH9003, FRA‑SFO, 15h00</option>
              <option value="LH9004">LH9004, FRA‑SFO, 17h45</option>
              <option value="LH9005">LH9005, FRA‑SFO, 20h15</option>
            </optgroup>
            <optgroup label="Japan">
              <option value="JL7001">JL7001, NRT‑SFO, 09h15</option>
              <option value="JL7002">JL7002, NRT‑SFO, 12h00</option>
              <option value="JL7003">JL7003, NRT‑SFO, 14h30</option>
              <option value="NH7004">NH7004, HND‑SFO, 16h45</option>
              <option value="NH7005">NH7005, HND‑SFO, 18h20</option>
            </optgroup>
            <optgroup label="USA">
              <option value="UA1001">UA1001, JFK‑SFO, 08h00</option>
              <option value="UA1002">UA1002, JFK‑SFO, 10h30</option>
              <option value="AA1003">AA1003, MIA‑SFO, 13h20</option>
              <option value="DL1004">DL1004, ATL‑SFO, 15h00</option>
              <option value="UA1005">UA1005, ORD‑SFO, 17h10</option>
            </optgroup>
            <optgroup label="United Kingdom">
              <option value="BA0289">BA0289, LHR‑SFO, 11h15</option>
              <option value="BA0288">BA0288, LHR‑SFO, 13h45</option>
              <option value="VS0234">VS0234, LHR‑SFO, 16h20</option>
              <option value="UA1971">UA1971, LHR‑SFO, 19h00</option>
            </optgroup>
            <optgroup label="Canada">
              <option value="AC0759">AC0759, YYZ‑SFO, 09h00</option>
              <option value="AC0760">AC0760, YYZ‑SFO, 11h30</option>
              <option value="WS0123">WS0123, YYZ‑SFO, 14h10</option>
              <option value="WS0124">WS0124, YYZ‑SFO, 17h50</option>
            </optgroup>
            <optgroup label="Australia">
              <option value="QF00074">QF00074, SYD‑SFO, 22h30</option>
              <option value="QF00075">QF00075, MEL‑SFO, 23h45</option>
              <option value="CX0889">CX0889, SYD‑SFO, 20h15</option>
            </optgroup>
            <optgroup label="Middle East">
              <option value="EK216">EK216, DXB-SFO, 09h35</option>
              <option value="EK215">EK215, SFO-DXB, 21h10</option>
              <option value="QR106">QR106, DOH-SFO, 08h00</option>
              <option value="QR105">QR105, SFO-DOH, 20h40</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="SQ31">SQ31, SIN-SFO, 11h50</option>
              <option value="SQ32">SQ32, SFO-SIN, 12h55</option>
              <option value="CX881">CX881, HKG-SFO, 10h30</option>
              <option value="CX880">CX880, SFO-HKG, 23h20</option>
            </optgroup>
            <optgroup label="South America">
              <option value="LA8030">LA8030, EZE-SFO, 22h10</option>
              <option value="LA8031">LA8031, SFO-EZE, 23h55</option>
              <option value="AA9712">AA9712, MEX-SFO, 18h00</option>
              <option value="AA9713">AA9713, SFO-MEX, 20h30</option>
            </optgroup>
            <optgroup label="Africa">
              <option value="SA054">SA054, JNB-SFO, 13h00</option>
              <option value="SA055">SA055, SFO-JNB, 22h45</option>
              <option value="ET602">ET602, ADD-SFO, 07h15</option>
            </optgroup>
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
                    I agree to the processing of my data in accordance with our <a href="/privacy" className="underline hover:text-white">privacy policy</a>.
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

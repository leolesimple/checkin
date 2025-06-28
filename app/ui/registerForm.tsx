'use client'
import {SetStateAction, useState} from 'react';

function FormField({label, id, type, required, placeholder}: {
    label: string,
    id: string,
    type: string,
    required?: boolean,
    placeholder?: string
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-sm text-stone-400">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                required={required}
                placeholder={placeholder}
                className="rounded-md border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-neutral-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
        </div>
    );
}

const FlightSelect = () => {
    const [selectedFlight, setSelectedFlight] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedFlight(event.target.value);
    };

    return (
        <select id="flight" name="flight" className="" value={selectedFlight} onChange={handleChange}>
            <option value="" disabled>Select your flight</option>
            <option value="none">No flight needed, I will come by myself.</option>
            <optgroup label="France">
                <option value="QF2197">QF2197, CDG-SFO, 04h15</option>
                <option value="LH2883">LH2883, LYS-SFO, 05h15</option>
                <option value="QF3719">QF3719, NCE-SFO, 00h30</option>
                <option value="BA9185">BA9185, LYS-SFO, 14h15</option>
                <option value="QF2251">QF2251, NCE-SFO, 07h45</option>
                <option value="QF2734">QF2734, LYS-SFO, 17h45</option>
                <option value="NH6084">NH6084, CDG-SFO, 15h45</option>
                <option value="LH6909">LH6909, LYS-SFO, 05h00</option>
                <option value="AC7800">AC7800, CDG-SFO, 15h45</option>
                <option value="UA4395">UA4395, NCE-SFO, 16h15</option>
                <option value="DL7586">DL7586, NCE-SFO, 11h45</option>
                <option value="LH5542">LH5542, LYS-SFO, 13h00</option>
                <option value="AC5259">AC5259, NCE-SFO, 00h45</option>
                <option value="AC7785">AC7785, LYS-SFO, 01h00</option>
                <option value="AF3856">AF3856, NCE-SFO, 20h15</option>
                <option value="BA4799">BA4799, LYS-SFO, 09h30</option>
                <option value="AF9540">AF9540, CDG-SFO, 20h00</option>
                <option value="NH7578">NH7578, CDG-SFO, 03h45</option>
                <option value="BA7579">BA7579, CDG-SFO, 08h15</option>
            </optgroup>
            <optgroup label="United States">
                <option value="UA1234">UA1234, JFK-SFO, 05h00</option>
                <option value="DL5678">DL5678, LAX-SFO, 02h30</option>
                <option value="AA9101">AA9101, ORD-SFO, 04h15</option>
                <option value="UA2345">UA2345, SEA-SFO, 01h45</option>
                <option value="DL6789">DL6789, ATL-SFO, 06h00</option>
                <option value="AA3456">AA3456, DFW-SFO, 03h30</option>
                <option value="UA4567">UA4567, IAH-SFO, 05h15</option>
                <option value="DL7890">DL7890, MIA-SFO, 07h00</option>
                <option value="AA5678">AA5678, BOS-SFO, 04h45</option>
                <option value="UA6789">UA6789, DEN-SFO, 02h15</option>
                <option value="DL8901">DL8901, PHX-SFO, 03h00</option>
                <option value="AA7890">AA7890, MCO-SFO, 06h30</option>
                <option value="UA8901">UA8901, LAS-SFO, 01h30</option>
                <option value="DL9012">DL9012, CLT-SFO, 05h45</option>
                <option value="AA1234">AA1234, PHL-SFO, 04h00</option>
            </optgroup>
            <optgroup label="United Kingdom">
                <option value="BA4041">BA4041, LGW-SFO, 02h30</option>
                <option value="AF2818">AF2818, LGW-SFO, 03h45</option>
                <option value="BA8164">BA8164, LHR-SFO, 08h30</option>
                <option value="AF1933">AF1933, LHR-SFO, 13h30</option>
                <option value="LH2766">LH2766, LHR-SFO, 03h45</option>
                <option value="LH4329">LH4329, LHR-SFO, 03h45</option>
                <option value="DL7432">DL7432, LHR-SFO, 18h30</option>
                <option value="UA7033">UA7033, MAN-SFO, 19h00</option>
                <option value="UA4658">UA4658, LHR-SFO, 18h30</option>
                <option value="AF2219">AF2219, MAN-SFO, 08h00</option>
                <option value="DL7757">DL7757, LHR-SFO, 03h00</option>
                <option value="DL6500">DL6500, LGW-SFO, 04h15</option>
                <option value="UA8751">UA8751, LGW-SFO, 04h00</option>
                <option value="QF7421">QF7421, LGW-SFO, 23h45</option>
                <option value="UA5204">UA5204, LHR-SFO, 11h15</option>
                <option value="AF4895">AF4895, MAN-SFO, 08h15</option>
                <option value="BA7964">BA7964, MAN-SFO, 17h30</option>
                <option value="NH6175">NH6175, LHR-SFO, 23h30</option>
                <option value="NH1315">NH1315, LHR-SFO, 19h30</option>
            </optgroup>
            <optgroup label="Germany">
                <option value="LH7142">LH7142, TXL-SFO, 01h00</option>
                <option value="AC2887">AC2887, FRA-SFO, 20h30</option>
                <option value="BA6686">BA6686, TXL-SFO, 10h30</option>
                <option value="QF7692">QF7692, TXL-SFO, 14h30</option>
                <option value="NH6354">NH6354, FRA-SFO, 22h30</option>
                <option value="UA5676">UA5676, FRA-SFO, 16h00</option>
                <option value="QF4972">QF4972, FRA-SFO, 07h00</option>
                <option value="BA2757">BA2757, FRA-SFO, 10h00</option>
                <option value="NH5322">NH5322, TXL-SFO, 14h30</option>
                <option value="QF7648">QF7648, FRA-SFO, 20h15</option>
                <option value="LH4508">LH4508, FRA-SFO, 14h15</option>
                <option value="UA5278">UA5278, MUC-SFO, 21h30</option>
                <option value="AF3059">AF3059, MUC-SFO, 10h15</option>
                <option value="DL5429">DL5429, TXL-SFO, 12h45</option>
                <option value="DL7862">DL7862, TXL-SFO, 16h00</option>
                <option value="AF5505">AF5505, TXL-SFO, 22h30</option>
                <option value="DL6141">DL6141, TXL-SFO, 08h30</option>
                <option value="BA8845">BA8845, FRA-SFO, 09h30</option>
            </optgroup>
            <optgroup label="Japan">
                <option value="BA2312">BA2312, HND-SFO, 20h45</option>
                <option value="QF1667">QF1667, HND-SFO, 09h00</option>
                <option value="LH4628">LH4628, NRT-SFO, 15h30</option>
                <option value="NH2408">NH2408, KIX-SFO, 13h00</option>
                <option value="DL8400">DL8400, KIX-SFO, 01h30</option>
                <option value="AC1735">AC1735, HND-SFO, 08h00</option>
                <option value="AF4082">AF4082, NRT-SFO, 09h30</option>
                <option value="BA6057">BA6057, KIX-SFO, 03h45</option>
                <option value="AF9525">AF9525, NRT-SFO, 11h30</option>
                <option value="AF9617">AF9617, KIX-SFO, 19h00</option>
                <option value="AC8798">AC8798, HND-SFO, 04h30</option>
                <option value="QF2699">QF2699, NRT-SFO, 17h45</option>
                <option value="UA4063">UA4063, KIX-SFO, 05h00</option>
                <option value="UA9082">UA9082, NRT-SFO, 11h30</option>
                <option value="AC7324">AC7324, HND-SFO, 07h00</option>
                <option value="BA5041">BA5041, KIX-SFO, 22h00</option>
                <option value="DL6040">DL6040, KIX-SFO, 03h15</option>
                <option value="AF3762">AF3762, NRT-SFO, 23h00</option>
            </optgroup>
            <optgroup label="Canada">
                <option value="QF8788">QF8788, YVR-SFO, 18h30</option>
                <option value="UA6469">UA6469, YYZ-SFO, 14h45</option>
                <option value="AC6754">AC6754, YUL-SFO, 11h30</option>
                <option value="LH2685">LH2685, YUL-SFO, 23h00</option>
                <option value="AC8237">AC8237, YUL-SFO, 23h15</option>
                <option value="DL6967">DL6967, YYZ-SFO, 23h45</option>
                <option value="AC9831">AC9831, YVR-SFO, 16h15</option>
                <option value="LH1086">LH1086, YVR-SFO, 19h45</option>
                <option value="LH1195">LH1195, YYZ-SFO, 15h30</option>
                <option value="BA5412">BA5412, YVR-SFO, 23h00</option>
                <option value="NH3042">NH3042, YYZ-SFO, 07h30</option>
                <option value="DL7851">DL7851, YVR-SFO, 10h15</option>
                <option value="NH1952">NH1952, YUL-SFO, 19h00</option>
                <option value="QF6369">QF6369, YUL-SFO, 08h00</option>
                <option value="QF4628">QF4628, YYZ-SFO, 05h45</option>
                <option value="AF5346">AF5346, YYZ-SFO, 12h45</option>
                <option value="DL7313">DL7313, YYZ-SFO, 04h30</option>
                <option value="AF3085">AF3085, YUL-SFO, 02h45</option>
            </optgroup>
            <optgroup label="Brazil">
                <option value="BA6922">BA6922, GRU-SFO, 10h15</option>
                <option value="DL4846">DL4846, GRU-SFO, 12h30</option>
                <option value="DL5586">DL5586, GIG-SFO, 16h30</option>
                <option value="NH9929">NH9929, GRU-SFO, 21h15</option>
                <option value="AC2622">AC2622, GIG-SFO, 16h00</option>
                <option value="NH6091">NH6091, GIG-SFO, 08h15</option>
                <option value="NH9872">NH9872, GRU-SFO, 16h45</option>
                <option value="LH7377">LH7377, GRU-SFO, 22h30</option>
                <option value="BA8509">BA8509, GRU-SFO, 02h45</option>
                <option value="UA7470">UA7470, GRU-SFO, 16h30</option>
                <option value="QF2480">QF2480, GIG-SFO, 15h30</option>
                <option value="NH4127">NH4127, GRU-SFO, 12h30</option>
                <option value="LH6952">LH6952, GRU-SFO, 00h45</option>
                <option value="AC6956">AC6956, GIG-SFO, 09h15</option>
                <option value="NH1908">NH1908, GIG-SFO, 04h30</option>
                <option value="AC7718">AC7718, GIG-SFO, 05h45</option>
                <option value="QF1671">QF1671, GRU-SFO, 14h30</option>
                <option value="LH9338">LH9338, GRU-SFO, 11h15</option>
            </optgroup>
            <optgroup label="Australia">
                <option value="UA9619">UA9619, SYD-SFO, 07h00</option>
                <option value="NH2415">NH2415, MEL-SFO, 05h00</option>
                <option value="AC8870">AC8870, MEL-SFO, 08h15</option>
                <option value="AC2967">AC2967, MEL-SFO, 17h00</option>
                <option value="BA4498">BA4498, SYD-SFO, 02h30</option>
                <option value="LH5597">LH5597, MEL-SFO, 08h00</option>
                <option value="UA6036">UA6036, SYD-SFO, 11h45</option>
                <option value="BA9922">BA9922, MEL-SFO, 18h30</option>
                <option value="DL8936">DL8936, SYD-SFO, 01h15</option>
                <option value="BA7444">BA7444, SYD-SFO, 03h00</option>
                <option value="AC3687">AC3687, MEL-SFO, 00h45</option>
                <option value="LH1710">LH1710, SYD-SFO, 08h15</option>
                <option value="AC8934">AC8934, SYD-SFO, 23h45</option>
                <option value="BA6471">BA6471, SYD-SFO, 07h15</option>
                <option value="DL9643">DL9643, MEL-SFO, 12h00</option>
                <option value="LH5173">LH5173, SYD-SFO, 00h30</option>
                <option value="NH8726">NH8726, SYD-SFO, 16h00</option>
                <option value="AF2045">AF2045, SYD-SFO, 09h30</option>
            </optgroup>
            <optgroup label="India">
                <option value="NH1122">NH1122, BOM-SFO, 00h15</option>
                <option value="BA6193">BA6193, BOM-SFO, 13h15</option>
                <option value="QF9928">QF9928, DEL-SFO, 01h00</option>
                <option value="DL9946">DL9946, DEL-SFO, 15h15</option>
                <option value="QF7320">QF7320, BOM-SFO, 01h30</option>
                <option value="AC6377">AC6377, BOM-SFO, 00h30</option>
                <option value="AC4936">AC4936, DEL-SFO, 12h30</option>
                <option value="NH8833">NH8833, DEL-SFO, 02h45</option>
                <option value="AF3858">AF3858, DEL-SFO, 22h15</option>
                <option value="AF6287">AF6287, DEL-SFO, 06h30</option>
                <option value="BA7281">BA7281, BOM-SFO, 16h00</option>
                <option value="AF1627">AF1627, DEL-SFO, 00h45</option>
                <option value="AC8634">AC8634, BOM-SFO, 06h30</option>
                <option value="NH1767">NH1767, DEL-SFO, 08h00</option>
                <option value="QF8201">QF8201, BOM-SFO, 05h15</option>
                <option value="UA9758">UA9758, BOM-SFO, 06h15</option>
                <option value="NH5997">NH5997, DEL-SFO, 12h30</option>
                <option value="UA9318">UA9318, DEL-SFO, 01h30</option>
            </optgroup>
            <optgroup label="Italy">
                <option value="LH5132">LH5132, FCO-SFO, 04h45</option>
                <option value="AC4224">AC4224, FCO-SFO, 08h30</option>
                <option value="AF1773">AF1773, FCO-SFO, 18h15</option>
                <option value="UA3448">UA3448, FCO-SFO, 06h00</option>
                <option value="UA3225">UA3225, FCO-SFO, 18h45</option>
                <option value="BA6336">BA6336, MXP-SFO, 15h00</option>
                <option value="DL9003">DL9003, MXP-SFO, 01h30</option>
                <option value="UA2143">UA2143, MXP-SFO, 03h45</option>
                <option value="BA2318">BA2318, FCO-SFO, 15h00</option>
                <option value="LH3716">LH3716, MXP-SFO, 17h30</option>
                <option value="BA6742">BA6742, MXP-SFO, 10h30</option>
                <option value="UA5788">UA5788, MXP-SFO, 22h30</option>
                <option value="QF5045">QF5045, MXP-SFO, 23h15</option>
                <option value="BA2074">BA2074, FCO-SFO, 22h45</option>
                <option value="AF9252">AF9252, MXP-SFO, 20h15</option>
                <option value="NH5646">NH5646, MXP-SFO, 19h15</option>
                <option value="NH3571">NH3571, MXP-SFO, 05h30</option>
                <option value="QF9626">QF9626, FCO-SFO, 19h45</option>
            </optgroup>
            <optgroup label="South Korea">
                <option value="QF8895">QF8895, ICN-SFO, 09h00</option>
                <option value="AC7184">AC7184, ICN-SFO, 12h00</option>
                <option value="QF8957">QF8957, ICN-SFO, 17h45</option>
                <option value="QF6637">QF6637, ICN-SFO, 12h00</option>
                <option value="BA4611">BA4611, ICN-SFO, 07h45</option>
                <option value="NH1232">NH1232, ICN-SFO, 08h00</option>
                <option value="QF7826">QF7826, ICN-SFO, 22h45</option>
                <option value="NH9449">NH9449, ICN-SFO, 14h00</option>
                <option value="NH3597">NH3597, ICN-SFO, 12h15</option>
                <option value="NH5416">NH5416, ICN-SFO, 08h30</option>
                <option value="LH6878">LH6878, ICN-SFO, 03h30</option>
                <option value="AC6047">AC6047, ICN-SFO, 10h15</option>
                <option value="NH3680">NH3680, ICN-SFO, 04h30</option>
                <option value="AF3394">AF3394, ICN-SFO, 18h00</option>
                <option value="LH8253">LH8253, ICN-SFO, 00h45</option>
                <option value="LH3934">LH3934, ICN-SFO, 06h15</option>
                <option value="DL7334">DL7334, ICN-SFO, 12h30</option>
                <option value="UA8598">UA8598, ICN-SFO, 21h15</option>
            </optgroup>
            <optgroup label="Spain">
                <option value="AF1101">AF1101, BCN-SFO, 14h15</option>
                <option value="LH6594">LH6594, MAD-SFO, 20h30</option>
                <option value="UA5993">UA5993, BCN-SFO, 00h45</option>
                <option value="NH6078">NH6078, MAD-SFO, 14h15</option>
                <option value="QF8505">QF8505, MAD-SFO, 19h15</option>
                <option value="AC3821">AC3821, BCN-SFO, 01h15</option>
                <option value="LH8896">LH8896, BCN-SFO, 01h00</option>
                <option value="DL5334">DL5334, MAD-SFO, 19h15</option>
                <option value="DL7520">DL7520, BCN-SFO, 10h15</option>
                <option value="LH7629">LH7629, MAD-SFO, 13h00</option>
                <option value="NH8318">NH8318, BCN-SFO, 20h30</option>
                <option value="BA6346">BA6346, MAD-SFO, 11h45</option>
                <option value="BA6822">BA6822, MAD-SFO, 22h15</option>
                <option value="AC7947">AC7947, BCN-SFO, 18h30</option>
                <option value="QF3089">QF3089, BCN-SFO, 20h15</option>
                <option value="AF5602">AF5602, MAD-SFO, 20h30</option>
                <option value="NH9162">NH9162, BCN-SFO, 21h00</option>
                <option value="DL5979">DL5979, BCN-SFO, 02h30</option>
            </optgroup>
        </select>
    );
};

export default function RegisterForm() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <form
            className="w-full max-w-2xl mx-auto space-y-8"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <div className="grid gap-6 md:grid-cols-2">
                <FormField label="First name" id="firstName" type="text" required placeholder="John"/>
                <FormField label="Last name" id="lastName" type="text" required placeholder="Appleseed"/>
                <FormField label="Email address" id="email" type="email" required placeholder="you@example.com"/>
                <FormField label="Phone number" id="phone" type="tel" required placeholder="+33 6 12 34 56 78"/>
                <FormField label="Company / Organization" id="company" type="text" required placeholder="Apple France"/>
                <FormField label="Job title" id="job" type="text" required placeholder="Creative Director"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="slot" className="text-sm text-stone-400">
                    Select your preferred flight to come.
                </label>
                <FlightSelect/>
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
                />
            </div>
            <div className="flex items-start gap-2">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 accent-blue-700"
                />
                <label htmlFor="consent" className="text-sm text-stone-400">
                    I agree to the processing of my data in accordance with our <a href="/privacy"
                                                                                   className="underline hover:text-white">privacy
                    policy</a>.
                </label>
            </div>
            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
                Submit registration
            </button>
            {submitted && (
                <p className="text-sm text-green-500 mt-4">Registration submitted. See you in Cupertino.</p>
            )}
        </form>
    );
}

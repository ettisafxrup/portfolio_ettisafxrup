import React from "react"
import { SectionObserver, ContentFadeIn } from "./Transitions"

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionObserver>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="bg-gradient-to-tr from-gray-100 to-gray-200 aspect-square rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] bg-gradient-to-tr from-gray-50 to-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/476275248_1137430024556191_25745299024945250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFk7K49bBBKZq8RAcVAskN4M8fnm0rfm80zx-ebSt-bzaRdwefEORKrlr7O3CY9AJ65pGiQTq2X_wFcyTO7Lfha&_nc_ohc=K8Yr41Yys5YQ7kNvgFv-O3u&_nc_oc=AdiW_nl0B5qTnzSlZd3Xp78UJ9edAZ8Se6x7EmshTqysvItRvcvzQQT5rXg22Ah8W8Q&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_gid=AupFv4SvHmsiWUWLMdXwFCX&oh=00_AYFdB5BbAHZfjFRKi__hByIQoEMFCAKOewQII31Ql92Rgg&oe=67D78656"
                      alt=""
                    />
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-24 h-24 bg-gray-200 rounded-full opacity-40"></div>
                <div className="absolute bottom-10 left-6 w-16 h-16 bg-gray-300 rounded-full opacity-30"></div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-100 rounded-full opacity-70 -z-10"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-50 -z-10"></div>
            </div>

            <ContentFadeIn>
              <div className="bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                B.Sc Undergraduate, KUET
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Learn, Create, Innovate.
              </h2>

              <div className="space-y-3 text-gray-600">
                <p className="font-bold">
                  Undergraduate in _______ at Khulna University of Engineering
                  and Technology.
                </p>

                <p>
                  Software Engineering{" "}
                  <span className="text-black font-bold">| </span>
                  DSA <span className="text-black font-bold">| </span>
                  Problem Solving{" "}
                  <span className="text-black font-bold">| </span>
                  Critical Thinking
                </p>

                <p>Books, Music, Writing. I'm an author, I write.</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="light-glass px-5 py-3 rounded-lg">
                  <span className="block text-xl font-semibold">4+</span>
                  <span className="block text-gray-500 text-sm">
                    Years Experience
                  </span>
                </div>

                <div className="light-glass px-5 py-3 rounded-lg">
                  <span className="block text-xl font-semibold">50+</span>
                  <span className="block text-gray-500 text-sm">
                    Projects Completed
                  </span>
                </div>

                <div className="light-glass px-5 py-3 rounded-lg">
                  <span className="block text-xl font-semibold">30+</span>
                  <span className="block text-gray-500 text-sm">
                    Happy Clients
                  </span>
                </div>
              </div>
            </ContentFadeIn>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export default About

import { Mail, Github, Linkedin, Youtube, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-28 bg-[#0f0f0f] relative overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-400 mb-12">
          Feel free to reach out for collaboration, opportunities, or just a friendly chat.
        </p>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl">

          {/* Email */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="text-purple-500" size={20} />
            <a
              href="mailto:sseffort@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              sseffort@gmail.com
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/10 transition"
            >
              <Github className="text-gray-300 hover:text-purple-400 transition" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/10 transition"
            >
              <Linkedin className="text-gray-300 hover:text-purple-400 transition" />
            </a>

            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/10 transition"
            >
              <Youtube className="text-gray-300 hover:text-purple-400 transition" />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/10 transition"
            >
              <Instagram className="text-gray-300 hover:text-purple-400 transition" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

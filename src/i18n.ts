import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

     detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],

      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,

      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          landing: {
            unlockPotential: "Unlock Your Potential with",
            aiMatching: "AI-Powered Matching",
            desc: "Match-It revolutionizes hiring for job seekers and companies with intelligent AI matching, personalized recommendations, and cutting-edge AI interviews.",
            findJob: "Find a Job",
            hire: "Find Talent",
            unlockConnections: "Unlock Smarter Connections",
            connectionsDesc: "Match-It leverages cutting-edge artificial intelligence to revolutionize your job search or hiring process.",
            precisionTitle: "Precision Matching",
            precisionDesc: "Our AI analyzes thousands of data points to match candidates with roles that truly fit their skills and aspirations.",
            profiles: 'Personalized Profiles',
            profileDesc: 'Create rich, detailed profiles that showcase your unique strengths to potential employers or candidates.',
            application: "Effortless Applications",
            applicationDesc: "Streamlined application process for candidates and intuitive applicant tracking for employers.",
            jobSeekers: "For Job Seekers: Find Your Next Opportunity",
            jobSeekersDesc: "Discover a seamless way to connect with jobs that align with your career goals.",
            createProfile: "Create Your Profile",
            createProfileDesc: "Build a comprehensive profile highlighting your skills, experience, and career aspirations. Our AI learns from you.",
            getJobs: "Get AI-Matched Jobs",
            getJobsDesc: "Receive personalized job recommendations tailored precisely to your profile, saving you endless searching.",
            apply: "Apply with Confidence",
            applyDesc: "Apply to jobs with a single click, knowing that you're a strong fit for the role. Track your applications easily.",
            employers: "For Employers: Find Your Perfect Hire",
            employersDesc: "Streamline your hiring process and connect with the best talent, effortlessly.",
            postJob: "Post Your Job",
            postJobTitle: "Quickly post job openings with detailed descriptions. Our AI begins analyzing your needs immediately.",
            aiMatches: "Receive AI-Curated Matches",
            aiMatchesDesc: "Get a shortlist of highly qualified candidates whose profiles perfectly match your job requirements.",
            connect: "Connect & Hire",
            connectDesc: "Easily review candidate profiles, initiate communication, and make the best hiring decisions, faster.",

          },

          settings: {
            selectLang: 'Select your preferable language',
            lang: 'Language',
            emailNotifications: 'Email notifications',
            receiveNotifications: 'Receive updates and announcements via email.',
            generalSettings: 'General Settings',
            manageSettings: "Manage your application's general preferences.",
            darkTheme: 'Dark theme',
            darkThemeDesc: 'Toggle between light and dark themes',
            toggleTheme: 'Toggle theme',
            light: 'Light',
            dark: 'Dark',
            system: 'System',
          },

          sidebar: {
            Main: "Main",
            System: "System",
            Dashboard: 'Dashboard',
            "AI Interview": "AI Interview",
            Settings: 'Settings',
            Account: 'Account',
          },

          account: {
            accountSettings: "Account Settings",
            manageAccount: 'Manage your profile information and preferences.',
            edit: "Edit Profile",
            fullName: "Full Name",
            jobTitle: "Job Title",
            email: "Email",
            phoneNumber: 'Phone Number',
            cv: 'CV',
            viewCV: 'View CV',
            lastUpdate: 'Last Update',
            resetPassword: 'Reset Password',
            logOut: 'Log Out',
            deleteAccount: 'Delete Account',
            editDesc: "Make changes to your profile here. Click save when you're done.",
            save: "Save Changes",
            close: "Close",
          },

          aiInterview: {
            heading: "AI Interview",
            desc: 'Start your AI-powered interview.',
            cardTitle: 'AI Interview Practice',
            cardDesc: 'Prepare for your next career move with our AI-powered interview simulator. Get instant feedback, refine your responses, and boost your confidence.',
            startInterview: 'Start Interview',
          },

          dashboard: {
            welcome: "Welcome",
            desc: "Track your performance from here.",
            totalApplications: 'Total applications',
            fromLastMonth: 'from last month',
            interviews: 'Interviews Scheduled',
            sinceLastWeek: 'since last week',
            offers: 'Offers Received',
            progress: 'Excellent progress',
            avgScore: 'Avg. Interview Score',
            chart: 'Performance Chart',
            chartDesc: "Showing candidate's performance for the last 6 months",
            trending: 'Trending up by',
            thisMonth: 'this month',
            time: 'January – June 2025',
          },

          toast: {
            updatedDataSuccess: "You have successfully updated your data",
          }
        }
      },
      nl: {
        translation: {
          landing: {
            unlockPotential: "Ontgrendel je potentieel met",
            aiMatching: "AI-gestuurde matching",
            desc: "Match-It revolutioneert het wervingsproces voor werkzoekenden en bedrijven met intelligente AI-matching, gepersonaliseerde aanbevelingen en geavanceerde AI-interviews.",
            findJob: "Vind een baan",
            hire: "Vind talent",
            unlockConnections: "Ontgrendel slimmere connecties",
            connectionsDesc: "Match-It maakt gebruik van geavanceerde kunstmatige intelligentie om je zoektocht naar werk of talent te transformeren.",
            precisionTitle: "Nauwkeurige matching",
            precisionDesc: "Onze AI analyseert duizenden gegevenspunten om kandidaten te koppelen aan functies die echt passen bij hun vaardigheden en ambities.",
            profiles: "Gepersonaliseerde profielen",
            profileDesc: "Maak uitgebreide profielen die jouw unieke sterke punten tonen aan potentiële werkgevers of kandidaten.",
            application: "Moeiteloze sollicitaties",
            applicationDesc: "Een gestroomlijnd sollicitatieproces voor kandidaten en een intuïtief volgsysteem voor werkgevers.",
            jobSeekers: "Voor werkzoekenden: vind je volgende kans",
            jobSeekersDesc: "Ontdek een naadloze manier om in contact te komen met banen die aansluiten bij jouw carrièredoelen.",
            createProfile: "Maak je profiel aan",
            createProfileDesc: "Bouw een uitgebreid profiel dat je vaardigheden, ervaring en ambities benadrukt. Onze AI leert van jou.",
            getJobs: "Ontvang AI-gematchte banen",
            getJobsDesc: "Ontvang gepersonaliseerde baanaanbevelingen die precies passen bij jouw profiel, zodat je eindeloos zoeken bespaart.",
            apply: "Solliciteer met vertrouwen",
            applyDesc: "Solliciteer met één klik op banen waarvan je weet dat je goed past. Volg je sollicitaties eenvoudig.",
            employers: "Voor werkgevers: vind je perfecte kandidaat",
            employersDesc: "Stroomlijn je wervingsproces en kom moeiteloos in contact met het beste talent.",
            postJob: "Plaats je vacature",
            postJobTitle: "Plaats snel vacatures met gedetailleerde beschrijvingen. Onze AI begint direct met het analyseren van je behoeften.",
            aiMatches: "Ontvang AI-geselecteerde matches",
            aiMatchesDesc: "Ontvang een shortlist van hooggekwalificeerde kandidaten wiens profielen perfect aansluiten bij jouw functievereisten.",
            connect: "Verbind & neem aan",
            connectDesc: "Bekijk eenvoudig profielen van kandidaten, start een gesprek en neem sneller de beste wervingsbeslissingen.",
          },

          settings: {
            selectLang: 'Kies jouw taal',
            lang: 'Taal',
            emailNotifications: 'E-mailmeldingen',
            receiveNotifications: 'Ontvang updates en aankondigingen via e-mail.',
            generalSettings: 'Algemene instellingen',
            manageSettings: 'Beheer de algemene voorkeuren van uw app',
            darkTheme: 'Donker thema',
            darkThemeDesc: "Schakelen tussen lichte en donkere thema's",
            toggleTheme: 'Thema wisselen',
            light: 'Licht',
            dark: 'Donker',
            system: 'Systeem',
          },
          
          sidebar: {
            Main: "Hoofd",
            System: "Systeem",
            Dashboard: 'Dashboard',
            "AI Interview": "AI Interview",
            Settings: 'Instellingen',
            Account: 'Account',
            
          },
          account: {
            accountSettings: "Accountinstellingen",
            manageAccount: "Beheer je profielinformatie en voorkeuren.",
            edit: "Profiel bewerken",
            fullName: "Volledige naam",
            jobTitle: "Functietitel",
            email: "E-mail",
            phoneNumber: "Telefoonnummer",
            cv: "CV",
            viewCV: "CV bekijken",
            lastUpdate: "Laatste update",
            resetPassword: "Wachtwoord opnieuw instellen",
            logOut: "Afmelden",
            deleteAccount: "Account verwijderen",
            editDesc: "Breng hier wijzigingen aan in je profiel. Klik op opslaan als je klaar bent.",
            save: "Wijzigingen opslaan",
            close: "Sluiten",
          },

          aiInterview: {
            heading: "AI Interview",
            desc: "Start je AI-aangedreven interview.",
            cardTitle: "AI Interviewoefening",
            cardDesc: "Bereid je voor op je volgende carrièrestap met onze AI-gestuurde interviewsimulator. Ontvang direct feedback, verbeter je antwoorden en vergroot je zelfvertrouwen.",
            startInterview: "Interview starten",
          },

          dashboard: {
            welcome: "Welkom",
            desc: "Volg hier je prestaties.",
            totalApplications: "Totaal aantal sollicitaties",
            fromLastMonth: "van vorige maand",
            interviews: "Geplande interviews",
            sinceLastWeek: "sinds vorige week",
            offers: "Ontvangen aanbiedingen",
            progress: "Uitstekende vooruitgang",
            avgScore: "Gemiddelde interviewscore",
            chart: "Prestatiegrafiek",
            chartDesc: "Toont de prestaties van de kandidaat van de afgelopen 6 maanden",
            trending: "Stijgend met",
            thisMonth: "deze maand",
            time: "Januari – Juni 2025",
          },

          toast: {
            updatedDataSuccess: "U heeft uw gegevens succesvol bijgewerkt",
          }
        }
      },
      ua: {
        translation: {
          landing: {
            unlockPotential: "Розкрий свій потенціал разом із",
            aiMatching: "Підбором на основі ШІ",
            desc: "Match-It революціонізує процес найму для шукачів роботи та компаній завдяки інтелектуальному підбору ШІ, персоналізованим рекомендаціям і передовим AI-співбесідам.",
            findJob: "Знайти роботу",
            hire: "Знайти талант",
            unlockConnections: "Розкрийте розумніші зв’язки",
            connectionsDesc: "Match-It використовує передові технології штучного інтелекту, щоб змінити ваш процес пошуку роботи або найму.",
            precisionTitle: "Точний підбір",
            precisionDesc: "Наш ШІ аналізує тисячі даних, щоб знайти ідеальну відповідність між кандидатами та посадами відповідно до їхніх навичок і прагнень.",
            profiles: "Персоналізовані профілі",
            profileDesc: "Створюйте докладні профілі, які підкреслюють ваші унікальні сильні сторони для потенційних роботодавців або кандидатів.",
            application: "Легке подання заявок",
            applicationDesc: "Оптимізований процес подачі заявок для кандидатів і зручне відстеження заявок для роботодавців.",
            jobSeekers: "Для шукачів роботи: знайди свою наступну можливість",
            jobSeekersDesc: "Відкрий для себе простий спосіб знайти роботу, що відповідає твоїм кар’єрним цілям.",
            createProfile: "Створи свій профіль",
            createProfileDesc: "Створи повний профіль, що підкреслює твої навички, досвід і кар’єрні прагнення. Наш ШІ навчається від тебе.",
            getJobs: "Отримуй вакансії, підібрані ШІ",
            getJobsDesc: "Отримуй персоналізовані рекомендації щодо вакансій, які точно відповідають твоєму профілю, економлячи час на пошуку.",
            apply: "Подай заявку з упевненістю",
            applyDesc: "Подай заявку одним кліком, знаючи, що ти чудово підходиш для цієї посади. Легко відстежуй свої заявки.",
            employers: "Для роботодавців: знайди свого ідеального кандидата",
            employersDesc: "Оптимізуй процес найму та знаходь найкращі таланти без зусиль.",
            postJob: "Розмісти вакансію",
            postJobTitle: "Швидко розмісти вакансії з детальним описом. Наш ШІ одразу почне аналізувати твої потреби.",
            aiMatches: "Отримуй підбір від ШІ",
            aiMatchesDesc: "Отримай короткий список висококваліфікованих кандидатів, чиї профілі ідеально відповідають вимогам твоєї вакансії.",
            connect: "Зв’язуйся та наймай",
            connectDesc: "Легко переглядай профілі кандидатів, починай спілкування та приймай найкращі рішення щодо найму швидше.",
          },

          settings: {
            selectLang: 'Оберіть мову',
            lang: 'Мова',
            emailNotifications: 'Сповіщення через електронну пошту',
            receiveNotifications: 'Отримувати анонси та сповіщення через електронну пошту',
            generalSettings: "Загальні налаштування",
            manageSettings: "Керування загальними налаштуваннями програми",
            darkTheme: "Темна тема",
            darkThemeDesc: "Оберіть між світлою та темною темами",
            toggleTheme: "Обрати тему",
            light: 'Світла',
            dark: 'Темна',
            system: 'Системна',
          },
          
          sidebar: {
            Main: "Головне",
            System: "Система",
            Dashboard: "Панель інструментів",
            "AI Interview": "Інтерв'ю з ШІ",
            Settings: "Налаштування",
            Account: "Обліковий запис",
          },

          account: {
            accountSettings: "Налаштування облікового запису",
            manageAccount: "Керуйте інформацією свого профілю та налаштуваннями.",
            edit: "Редагувати профіль",
            fullName: "Повне ім’я",
            jobTitle: "Посада",
            email: "Електронна пошта",
            phoneNumber: "Номер телефону",
            cv: "Резюме",
            viewCV: "Переглянути резюме",
            lastUpdate: "Останнє оновлення",
            resetPassword: "Скинути пароль",
            logOut: "Вийти",
            deleteAccount: "Видалити обліковий запис",
            editDesc: "Внесіть зміни у свій профіль тут. Натисніть зберегти, коли завершите.",
            save: "Зберегти зміни",
            close: "Закрити",
          },

          aiInterview: {
            heading: "AI Співбесіда",
            desc: "Почніть свою співбесіду з підтримкою штучного інтелекту.",
            cardTitle: "Практика AI-співбесіди",
            cardDesc: "Підготуйтеся до свого наступного кар’єрного кроку за допомогою нашого AI-симулятора співбесід. Отримуйте миттєвий зворотний зв’язок, вдосконалюйте відповіді та підвищуйте впевненість у собі.",
            startInterview: "Почати співбесіду",
          },

          dashboard: {
            welcome: "Ласкаво просимо",
            desc: "Відстежуйте свої результати тут.",
            totalApplications: "Усього заявок",
            fromLastMonth: "з минулого місяця",
            interviews: "Заплановані співбесіди",
            sinceLastWeek: "з минулого тижня",
            offers: "Отримані пропозиції",
            progress: "Відмінний прогрес",
            avgScore: "Середній бал співбесіди",
            chart: "Графік результатів",
            chartDesc: "Результати кандидата за останні 6 місяців",
            trending: "Зростання на",
            thisMonth: "цього місяця",
            time: "Січень – Червень 2025",
          },

          toast: {
            updatedDataSuccess: "Ви успішно оновили профіль",
          }
          
        }
      }
    }
  });


export default i18n;
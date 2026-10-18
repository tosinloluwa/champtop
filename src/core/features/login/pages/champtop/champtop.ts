import { Component, ViewChild } from '@angular/core';
import { CoreSharedModule } from '@/core/shared.module';
import { CoreNavigator } from '@services/navigator';
import { CoreOpener } from '@static/opener';

type PublicPage = 'home' | 'about' | 'programmes' | 'teaching';

@Component({
    selector: 'page-champtop-public',
    standalone: true,
    imports: [CoreSharedModule],
    templateUrl: 'champtop.html',
    styleUrl: 'champtop.scss',
})
export default class ChampTopPublicPage {
    @ViewChild('publicContent') content?: { scrollToTop(duration: number): Promise<void> };
    page: PublicPage = 'home';
    readonly imageRoot = 'assets/champtop-public/';
    readonly programmes = [
        { title: 'Web & App Development + AI', tag: 'CODE + CREATE', image: 'hero.png', colour: 'blue',
            text: 'Turn ideas into websites and apps. Build practical coding skills and explore AI-assisted development.' },
        { title: 'Animation', tag: 'MAKE IT MOVE', image: 'animation.png', colour: 'pink',
            text: 'Bring characters and stories to life through creative animation projects.' },
        { title: 'Robotics Engineering', tag: 'BUILD + EXPERIMENT', image: 'robotics.png', colour: 'mint',
            text: 'Explore how code and engineering work together to make things happen.' },
        { title: 'Financial Literacy', tag: 'SMART MONEY SKILLS', image: '', colour: 'yellow',
            text: 'Develop practical understanding of saving, budgeting and making thoughtful money decisions.' },
    ];
    select(page: PublicPage): void { this.page = page; void this.content?.scrollToTop(0); }
    signIn(): void {
        void CoreNavigator.navigate('/login/credentials', {
            params: { siteUrl: 'https://learn.champtopacademy.com' },
        });
    }
    signup(): void {
        void CoreOpener.openInBrowser('https://learn.champtopacademy.com/login/signup.php', { showBrowserWarning: false });
    }
    contact(): void {
        void CoreOpener.openInBrowser('https://champtopacademy.com/contact.html', { showBrowserWarning: false });
    }
    privacy(): void {
        void CoreOpener.openInBrowser('https://champtopacademy.com/privacy.html', { showBrowserWarning: false });
    }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    {path:"", component:HomeComponent,  data: { title: 'Home'}},
    {path:"home", component: HomeComponent,
        data: { title: 'Home' }
    },
     {path:"education", component: EducationComponent,
         data: { title: 'Education' }
    },
     {path:"skills", component: SkillsComponent,
         data: { title: 'Skills' }
    },
     {path:"contact", component: ContactComponent,
         data: { title: 'Contact' }
    },
     {path:"me", component: MeComponent,
               data: { title: 'Me' }
    },
     {path:"projects", component: ProjectsComponent,
         data: { title: 'Projects' }
    },
    {path:"features", component: FeaturesComponent,
         data: { title: 'Features' }
    },
    {path:"**", redirectTo:'home', pathMatch: 'full'}
];

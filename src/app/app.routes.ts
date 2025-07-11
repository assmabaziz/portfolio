import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path:"", component:HomeComponent, title:"Home"},
    {path:"home", component: HomeComponent,
        title:"Home"
    },
     {path:"education", component: EducationComponent,
        title:"Education"
    },
     {path:"skills", component: SkillsComponent,
        title:"Skills"
    },
     {path:"contact", component: ContactComponent,
        title:"Contact"
    },
     {path:"me", component: MeComponent,
        title:"Me"
    },
     {path:"projects", component: ProjectsComponent,
        title:"Projects"
    }
];

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplateContentEditorComponent } from "./template-content-editor/template-content-editor.component";
import { TemplateListComponent } from "./template/template-list/template-list.component";
import { TemplateComponent } from "./template/template.component";

const appRoutes: Routes = [
    {path : '', redirectTo: '/editor', pathMatch: 'full'},
    {path : 'editor', component: TemplateContentEditorComponent},
    {path : 'myTemplates', component: TemplateListComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
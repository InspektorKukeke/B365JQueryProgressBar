controladdin "ProgressBar"
{
    VerticalStretch = true;
    HorizontalStretch = true;
    VerticalShrink = true;
    HorizontalShrink = true;
    RequestedHeight = 600;
    RequestedWidth = 200;

    Scripts = 'ControlAddIn\ProgressBar\Script\jquery-1.12.js',
            'ControlAddIn\ProgressBar\Script\ProgressBar.js',
            'ControlAddIn\ProgressBar\Script\jquery.lineProgressbar.js';

    StyleSheets = 'ControlAddIn\ProgressBar\Stylesheet\jquery.lineProgressbar.css';

    StartupScript = 'ControlAddIn\ProgressBar\Script\start.js';

    event OnAddInReady();

    event OnItemClicked(DivValue: Text);

}
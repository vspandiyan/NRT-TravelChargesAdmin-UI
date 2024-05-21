$environmentlevel = 'dev'

#>>>Home directory for json templates
#>>>LOCATION MUST BE CHANGED TO MATCH LOCAL MACHNE DIRECTORY
#set-location "{Your Folder Location}\NRT.AdminWeb\Deploy\"
set-location "C:\tabhome\tfs\Repos\NRT.AdminWeb\Deploy\"

#>>>Force upper case
$environmentlevel = $environmentlevel.ToUpper()

    switch ( $environmentlevel )
    {
    'DEV' { 
        $SubscriptionId = "MobileServices.DEV.TEST"
        $ResourceGroupName = "nonRevEmployeeTravel-dev-group"
        $ResourceGroupLocation = "westus2"    }
    'TEST' { 
        $SubscriptionId = "MobileServices.DEV.TEST"
        $ResourceGroupName = "nonRevEmployeeTravel-test-group"
        $ResourceGroupLocation = "westus2"    }
    'QA' { 
        $SubscriptionId = "MobileServices.qa"
        $ResourceGroupName = "nonRevEmployeeTravel-qa-group"
        $ResourceGroupLocation = "westus2"   }
    'PROD' { 
        $SubscriptionId = "MobileServices.prod"
        $ResourceGroupName = "nonRevEmployeeTravel-prod-group"
        $ResourceGroupLocation = "westus2"   }
    default {
        throw "Invalid environment level.  Value: " + $environmentlevel}
    }

#$SubscriptionId = "MobileServices.DEV.TEST"
#$ResourceGroupName = "nonRevEmployeeTravel-dev-group"
#$ResourceGroupLocation = "westus2"

$AzureFunctionName="flyadmin"

#Login-AzureRmAccount -SubscriptionName $SubscriptionId

Select-AzureRmSubscription -SubscriptionName $SubscriptionId

#>>>Arm Template
$TemplateFile = "$AzureFunctionName.json"
write-output "TemplateFile: $TemplateFile"
#>>>Arm Template Parameter File
$TemplateParametersFile = "param\$environmentlevel\$AzureFunctionName.parameters.json"
write-output "TemplateParametersFile: $TemplateParametersFile"

$ResourceDeployName = "$(((Get-ChildItem $TemplateFile).BaseName) + '-' + $((Get-Date).ToUniversalTime().ToString('yyyyMMdd-HHmm')))"

#>>>Execute Arm Templates
Test-AzureRmResourceGroupDeployment -ResourceGroupName $ResourceGroupName -TemplateFile $TemplateFile -TemplateParameterFile $TemplateParametersFile -ErrorAction Stop -Debug
#New-AzureRmResourceGroupDeployment -Name "$ResourceDeployName" -ResourceGroupName $ResourceGroupName -TemplateFile $TemplateFile -Force -Verbose -DeploymentDebugLogLevel All -Debug
#New-AzureRmResourceGroupDeployment -Name "$ResourceDeployName" -ResourceGroupName $ResourceGroupName -TemplateFile "$TemplateFile" -TemplateParameterFile "$TemplateParametersFile" -Force -Verbose -DeploymentDebugLogLevel All -Debug
#New-AzureRmResourceGroupDeployment -Name "$ResourceDeployName" -ResourceGroupName $ResourceGroupName -TemplateFile "$TemplateFile" -TemplateParameterFile "$TemplateParametersFile" -Force -Verbose -DeploymentDebugLogLevel All
#New-AzureRmResourceGroupDeployment -Name "$ResourceDeployName" -ResourceGroupName $ResourceGroupName -TemplateFile "$TemplateFile" -TemplateParameterFile "$TemplateParametersFile" -Force -Verbose

import nibabel as nib
import numpy as np

# Charger
img = nib.load("D:/Callisto/repo/cerveauscience.github.io/data/samples/mri_human.nii.gz")

# Appliquer un flip sur l'axe sagittal (dépend de l’orientation du volume)
flipped_data = np.flip(img.get_fdata(), axis=2)

# Sauver
nib.save(nib.Nifti1Image(flipped_data, img.affine), "D:/Callisto/repo/cerveauscience.github.io/data/samples/mri_human_filpped.nii.gz")